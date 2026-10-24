import Link from "next/link";
const snippets = {
esp: String.raw`// Arduino IDE: ESP32 + Adafruit SHT31 + PubSubClient
#include <WiFi.h>
#include <Wire.h>
#include <Adafruit_SHT31.h>
#include <PubSubClient.h>
#include <time.h>
const char* ssid = "YOUR_WIFI";
const char* wifiPass = "YOUR_WIFI_PASSWORD";
const char* broker = "192.168.1.10";
const char* mqttUser = "sensor01";
const char* mqttPass = "YOUR_MQTT_PASSWORD";
WiFiClient transport; // LAN only; use WiFiClientSecure + CA for WAN
PubSubClient mqtt(transport);
Adafruit_SHT31 sht = Adafruit_SHT31();
unsigned long lastSent = 0;
void connectMqtt() {
  while (!mqtt.connected()) {
    if (!mqtt.connect("node01", mqttUser, mqttPass)) delay(3000);
  }
}
void setup() {
  Serial.begin(115200);
  Wire.begin(21, 22); // example ESP32 pinout
  if (!sht.begin(0x44)) { Serial.println("SHT31 not found"); while(true) delay(1000); }
  WiFi.begin(ssid, wifiPass);
  while(WiFi.status()!=WL_CONNECTED) delay(500);
  configTime(7*3600,0,"pool.ntp.org");
  mqtt.setServer(broker,1883);
}
void loop() {
  if (!mqtt.connected()) connectMqtt();
  mqtt.loop();
  if (millis()-lastSent < 15000) return;
  lastSent = millis();
  float t=sht.readTemperature(), rh=sht.readHumidity();
  if (isnan(t)||isnan(rh)||t<0||t>60||rh<0||rh>100) return;
  time_t now=time(nullptr);
  if (now < 1700000000) return; // clock not synchronized
  char msg[192];
  snprintf(msg,sizeof(msg),
    "{\"node_id\":\"node01\",\"timestamp\":%ld,\"temperature_c\":%.2f,\"rh_percent\":%.2f}",
    (long)now,t,rh);
  mqtt.publish("farm/telemetry/node01",msg);
}`,
mosquitto: `# Debian/Ubuntu local gateway
sudo apt update
sudo apt install mosquitto mosquitto-clients
sudo mosquitto_passwd -c /etc/mosquitto/passwd sensor01
# /etc/mosquitto/conf.d/farm.conf
listener 1883 0.0.0.0
allow_anonymous false
password_file /etc/mosquitto/passwd
# Restrict port 1883 to trusted LAN using the host firewall.
sudo systemctl restart mosquitto
mosquitto_sub -h 127.0.0.1 -u sensor01 -P 'PASSWORD' -t 'farm/telemetry/#' -v`,
telegraf: String.raw`# Example for Telegraf + InfluxDB 2.x. Adjust to your versions.
[[inputs.mqtt_consumer]]
  servers = ["tcp://127.0.0.1:1883"]
  topics = ["farm/telemetry/+"]
  username = "sensor01"
  password = "\${MQTT_PASSWORD}"
  data_format = "json"
  name_override = "climate"
  tag_keys = ["node_id"]
  json_time_key = "timestamp"
  json_time_format = "unix"
  json_string_fields = ["node_id"]
[[outputs.influxdb_v2]]
  urls = ["http://127.0.0.1:8086"]
  token = "\${INFLUX_TOKEN}"
  organization = "farm"
  bucket = "climate"`,
flux: `from(bucket: "climate")
  |> range(start: -24h)
  |> filter(fn: (r) => r._measurement == "climate")
  |> filter(fn: (r) => r._field == "temperature_c")
  |> aggregateWindow(every: 5m, fn: mean, createEmpty: false)`,
jetson: `# Python 3 on Jetson Nano: pip install paho-mqtt
# DEMONSTRATION / DRY-RUN: does not switch physical AC.
import json, time, uuid
import paho.mqtt.client as mqtt
BROKER="192.168.1.10"
ON_ABOVE, OFF_BELOW=24.0, 22.0
MIN_SWITCH_SECONDS=300  # adjust to actual HVAC specifications
state=False
last_switch=0.0
def on_message(client, userdata, msg):
    global state,last_switch
    try:
        data=json.loads(msg.payload)
        if data["node_id"]!="node01": return
        temp=float(data["temperature_c"])
        stamp=float(data["timestamp"])
        now=time.time()
        if abs(now-stamp)>120 or not (0 <= temp <= 60): return
        desired= True if temp>ON_ABOVE else False if temp<OFF_BELOW else state
        if desired==state or now-last_switch<MIN_SWITCH_SECONDS: return
        cmd={"command_id":str(uuid.uuid4()),"ac_on":desired,
             "issued_at":int(now),"mode":"dry_run"}
        client.publish("farm/command/ac/demo",json.dumps(cmd),qos=1)
        state,last_switch=desired,now
        print("DEMO only:",cmd)
    except (KeyError, ValueError, TypeError) as ex:
        print("Invalid sensor message:",ex)
client=mqtt.Client(mqtt.CallbackAPIVersion.VERSION2)
client.username_pw_set("controller","YOUR_CONTROLLER_PASSWORD")
client.on_message=on_message
client.connect(BROKER,1883,60)
client.subscribe("farm/telemetry/node01",qos=1)
client.loop_forever()`
};
export const codeExamples: Record<string,{heading:string;intro:string;blocks:{title:string;code:string}[];tests:string[]}> = {
"esp32-suhu-kelembapan":{heading:"Praktikum 1 — ESP32 ke MQTT",intro:"Contoh Arduino IDE dengan SHT31 pada I²C 0x44. Alamat broker, kredensial, dan jaringan harus diubah sesuai laboratorium. Kode menggunakan TCP tanpa TLS hanya untuk LAN tepercaya; jangan buka broker ini ke internet.",blocks:[{title:"Firmware ESP32 (Arduino)",code:snippets.esp}],tests:["Pastikan sensor dikenali di Serial Monitor dan timestamp valid setelah sinkronisasi NTP.","Subscribe topic farm/telemetry/node01 dan periksa JSON yang diterima.","Putuskan Wi-Fi selama 30 detik, sambungkan lagi, lalu pastikan pengiriman pulih. Kode blocking ini merupakan baseline praktikum, bukan firmware produksi."]},
"mqtt-esp32-broker":{heading:"Praktikum 2 — Broker MQTT lokal",intro:"Konfigurasi berikut untuk Ubuntu/Debian pada gateway jaringan privat. Gunakan user terpisah untuk sensor dan controller; password jangan dimasukkan ke GitHub.",blocks:[{title:"Instalasi dan uji Mosquitto",code:snippets.mosquitto}],tests:["Periksa klien tanpa kredensial ditolak.","Lihat pesan suhu melalui mosquitto_sub lalu uji topic berbeda.","Amati kondisi reconnect ketika broker dihentikan dan dijalankan kembali."]},
"influxdb-telegraf-grafana":{heading:"Praktikum 3 — Dari MQTT ke dashboard",intro:"Versi contoh memakai InfluxDB 2.x dan Flux. Untuk instalasi InfluxDB 3, gunakan query SQL dan konfigurasi output yang kompatibel. Siapkan bucket climate, organisasi farm, dan token berhak minimum.",blocks:[{title:"Konfigurasi Telegraf (contoh)",code:snippets.telegraf},{title:"Contoh query Flux di Grafana",code:snippets.flux}],tests:["Uji parsing JSON dan perhatikan field numerik serta timestamp epoch detik.","Buat panel temperature_c dan rh_percent per node_id, lalu tampilkan 24 jam terakhir.","Uji missing data dan pastikan panel tidak menghubungkan data hilang seolah pengukuran berkelanjutan."]},
"jetson-rule-based-ac":{heading:"Praktikum 4 — Jetson Nano rule-based",intro:"Program berikut sengaja hanya menerbitkan perintah DRY-RUN ke topic demo. Perintah ini tidak boleh disambungkan langsung ke relay AC, kompresor, atau tegangan PLN. Integrasi fisik membutuhkan verifikasi interlock, feedback aktuator, failsafe dan teknisi berkompeten.",blocks:[{title:"Python: controller lokal (dry-run)",code:snippets.jetson}],tests:["Kirim data 25°C lalu 21°C dengan timestamp baru; amati perintah saat jeda minimum terpenuhi.","Uji pembacaan sensor lebih tua dari 120 detik: harus diabaikan.","Uji suhu 23°C: status terakhir harus dipertahankan; untuk produksi simpan status aktual dari acknowledgement perangkat, bukan menganggap publish berarti aksi berhasil."]}
};
export function ReproducibleGuide({slug}:{slug:string}){
 const g=codeExamples[slug];if(!g)return null;
 return <section className="mt-14 border-t border-[var(--line)] pt-10"><h2 className="font-display text-3xl text-forest-deep">{g.heading}</h2><p className="mt-4 leading-8 text-muted">{g.intro}</p>
 <div className="mt-7 space-y-7">{g.blocks.map(b=><section key={b.title}><h3 className="mb-3 font-semibold text-forest-deep">{b.title}</h3><pre className="max-h-[550px] overflow-auto rounded-2xl bg-slate-950 p-5 text-xs leading-6 text-slate-100"><code>{b.code}</code></pre></section>)}</div>
 <h3 className="mt-8 text-xl font-semibold text-forest-deep">Uji penerimaan</h3><ol className="mt-4 list-decimal space-y-2 pl-6 leading-7 text-muted">{g.tests.map(t=><li key={t}>{t}</li>)}</ol>
 <p className="mt-8 text-sm text-muted">Rangkaian praktikum: <Link href="/equipment/esp32-suhu-kelembapan/" className="underline">ESP32</Link> → <Link href="/equipment/mqtt-esp32-broker/" className="underline">MQTT</Link> → <Link href="/equipment/influxdb-telegraf-grafana/" className="underline">Grafana</Link> → <Link href="/equipment/jetson-rule-based-ac/" className="underline">Jetson Nano</Link>.</p></section>;
}