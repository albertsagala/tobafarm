export const methodsCopy = {
  "en": {
    "title": "Mapping Space, Forecasting Time: Kriging and SARIMA for Indoor Farming",
    "dek": "How Kriging, IDW, RBF, ARIMA, and SARIMA answer different questions in a sensor-equipped container farm—and how to evaluate them without mistaking a convincing map for a reliable prediction.",
    "sections": [
      [
        "Two questions behind every microclimate dashboard",
        [
          "Where is the warmest part of the farm now? What might the temperature be thirty minutes from now? These questions need different evidence. A spatial map estimates conditions between sensor positions at a specified time. A forecast estimates future conditions from information available at its issue time.",
          "Tobafarm’s 10-ft container and 27 internal sensor nodes provide the setting for this discussion. Kriging and seasonal forecasting have featured in our research discussions. This article explains their roles and an evaluation workflow; it does not report a new benchmark or declare a winning model."
        ]
      ],
      [
        "Kriging: learning how locations relate",
        [
          "Ordinary Kriging estimates a value as a weighted sum of observations. Weights sum to one and depend on a model of spatial dependence, not distance alone. Its unknown-mean assumption is local to the modelled domain; a strong systematic gradient may need a trend model or residual approach. [1]",
          "The semivariogram describes how differences between observations change with separation. The nugget represents unresolved variation or measurement effects, the sill describes the model’s variance level, and the range characterises correlation distance; some models approach their sill asymptotically. Direction matters when airflow creates anisotropy. [2]",
          "For a container, coordinates must correspond to real sensor positions. A left–right temperature contrast and a top–bottom contrast need not share the same correlation scale. With only 27 locations, fitting a separate elaborate directional variogram at every timestamp can be unstable. Test a small, defensible candidate set instead of treating every smooth surface as physical evidence.",
          "Kriging uncertainty is conditional on the chosen spatial model and assumptions. It does not automatically include calibration bias, variogram selection uncertainty, or an unobserved equipment failure. Report prediction errors at withheld sensors alongside any uncertainty map. [1,2]"
        ]
      ],
      [
        "IDW and RBF: essential spatial comparisons",
        [
          "IDW assigns more influence to nearby readings through inverse-distance weights. The power and neighbourhood affect the result; at an observed location, exact interpolation returns the observed reading. It is an accessible baseline, but proximity alone may miss directional structure. [3]",
          "RBF builds a surface from radial kernels, often with polynomial terms. Kernel choice, smoothing, and sometimes a shape parameter affect behaviour. Exact fitting is not evidence of good prediction between sensors; a smoothed fit may be more appropriate when observations are noisy. [4]",
          "Compare these methods on the same timestamps, sensor subsets, coordinate system, and measured targets. A Kriging advantage is meaningful only if it persists under a fair comparison. Also report failure cases, compute time, boundary behaviour, and performance when fewer sensors remain available."
        ]
      ],
      [
        "ARIMA and SARIMA: modelling temporal dependence",
        [
          "ARIMA(p,d,q) combines autoregression, differencing, and moving-average error terms. SARIMA(p,d,q)(P,D,Q)[m] adds seasonal terms with period m measured in observations. For a daily cycle, m depends on the sampling interval; it is not automatically 24. [5]",
          "A lighting schedule can motivate a daily candidate period, but it does not prove stable seasonality. Crop growth, changes to AC operation, and sensor replacement can alter the process. Two days of data provide only two daily cycles: hundreds of measurements do not substitute for repeated cycles across operating conditions.",
          "Historical discussion of a particular SARIMA order is a starting candidate, not a reusable optimum. Select orders using training data, check residuals, and judge the result on future windows. If lighting, outdoor conditions, or actuator inputs are used as predictors, distinguish regression with ARIMA errors or SARIMAX from an univariate SARIMA model. Future predictor values must be known or forecast at issue time."
        ]
      ],
      [
        "Validation is where the scientific claim is earned",
        [
          "For mapping, remove a sensor before fitting the variogram, tuning parameters, imputing inputs, or training a residual correction. Score the prediction against that sensor’s original measured value. Leave-one-sensor-out testing asks about unseen positions; holding out a zone asks a harder question about spatial gaps.",
          "For forecasting, train on the past and evaluate later observations using rolling origins. Recompute any preprocessing with information available at each origin. Compare with persistence and a seasonal-naive forecast at exactly the same horizons. [6]",
          "Do not impute the full dataset using every sensor and then withhold a sensor: its values may already have influenced the training inputs. Do not interpolate across future timestamps before forecasting either. Keep an observed-versus-imputed flag and calculate headline errors against genuine measurements.",
          "Report MAE and RMSE by sensor, zone, operating period, and forecast horizon. For probabilistic forecasts, inspect interval coverage and width. Separate tuning from final evaluation; aggregate uncertainty over meaningful time blocks rather than treating adjacent samples as independent experiments."
        ]
      ],
      [
        "Combining Kriging and SARIMA: a testable extension",
        [
          "One possible workflow forecasts each observed location, then maps those forecasts to a 3D grid. Another models a spatial trend and forecasts its residual structure. These are proposed architectures here, not demonstrated Tobafarm results.",
          "The order of operations matters. Mapping first can introduce spatially dependent errors into the temporal model; forecasting first can introduce correlated forecast errors into the map. Kriging variance alone is not the full uncertainty of the combined forecast. Evaluate the entire pipeline against withheld locations and future times.",
          "A useful research question is whether a spatial forecast detects future hotspots better than a room-average forecast at an acceptable computation cost. This is more specific than simply combining five algorithms. A forecast can inform supervisory decisions, but it is not itself a controller or a safety guarantee."
        ]
      ]
    ],
    "heads": [
      "Method",
      "Main task",
      "What must be checked"
    ],
    "rows": [
      [
        "Kriging",
        "Spatial estimation",
        "Variogram, trend, anisotropy, withheld-sensor errors"
      ],
      [
        "IDW",
        "Spatial baseline",
        "Power, neighbourhood, boundary errors"
      ],
      [
        "RBF",
        "Spatial surface",
        "Kernel, smoothing, coordinate scaling"
      ],
      [
        "ARIMA",
        "Temporal forecast",
        "Orders, residuals, future-window accuracy"
      ],
      [
        "SARIMA",
        "Seasonal temporal forecast",
        "Seasonal period, repeated cycles, baseline skill"
      ]
    ]
  },
  "id": {
    "title": "Memetakan Ruang, Meramalkan Waktu: Kriging dan SARIMA untuk Indoor Farming",
    "dek": "Peran Kriging, IDW, RBF, ARIMA, dan SARIMA pada container farm bersensor—serta cara mengujinya agar peta yang meyakinkan tidak disalahartikan sebagai prediksi yang andal.",
    "sections": [
      [
        "Dua pertanyaan di balik dashboard mikroklimat",
        [
          "Di mana bagian kebun paling panas saat ini? Berapa kemungkinan suhunya tiga puluh menit lagi? Peta spasial memperkirakan kondisi di antara posisi sensor pada waktu tertentu. Peramalan memperkirakan kondisi masa depan memakai informasi yang sudah tersedia saat prediksi dibuat.",
          "Kontainer 10 kaki dan 27 node sensor internal Tobafarm menjadi konteks pembahasan ini. Kriging dan peramalan musiman pernah dibahas dalam pengembangan riset kami. Artikel ini menjelaskan fungsi metode dan rancangan evaluasinya, bukan melaporkan benchmark baru atau menetapkan metode terbaik."
        ]
      ],
      [
        "Kriging: mempelajari hubungan antarlokasi",
        [
          "Ordinary Kriging memperkirakan nilai melalui penjumlahan observasi berbobot. Jumlah bobotnya satu dan ditentukan oleh model hubungan spasial, bukan hanya jarak. Asumsi rerata yang tidak diketahui berlaku pada domain yang dimodelkan; gradien sistematis yang kuat dapat membutuhkan pemodelan tren atau residual. [1]",
          "Semivariogram menggambarkan perubahan perbedaan observasi terhadap jarak. Nugget mewakili variasi yang tidak teresolusi atau efek pengukuran, sill menggambarkan tingkat varians model, sedangkan range mencirikan jarak korelasi. Sebagian model mendekati sill secara asimtotik. Anisotropi berarti hubungan tersebut bergantung pada arah. [2]",
          "Pada kontainer, koordinat harus sesuai posisi sensor sebenarnya. Perbedaan kiri–kanan dan atas–bawah tidak harus memiliki skala korelasi sama. Dengan 27 lokasi, memaksakan variogram arah yang kompleks pada setiap waktu dapat menghasilkan estimasi tidak stabil. Uji beberapa kandidat yang beralasan; jangan menganggap permukaan halus sebagai bukti mekanisme fisik.",
          "Ketidakpastian Kriging bersyarat pada model spasial dan asumsi yang dipilih. Nilainya tidak otomatis mencakup bias kalibrasi, ketidakpastian pemilihan variogram, atau kegagalan peralatan yang tidak teramati. Sertakan galat prediksi pada sensor yang disisihkan. [1,2]"
        ]
      ],
      [
        "IDW dan RBF: pembanding spasial yang diperlukan",
        [
          "IDW memberi pengaruh lebih besar kepada pembacaan terdekat melalui bobot kebalikan jarak. Pangkat dan lingkungan pencarian memengaruhi hasil; pada posisi pengamatan, interpolasi eksak mengembalikan pembacaan sensor tersebut. IDW berguna sebagai baseline, tetapi kedekatan saja belum tentu menangkap pola menurut arah. [3]",
          "RBF membangun permukaan memakai kernel radial, sering dengan komponen polinomial. Pilihan kernel, smoothing, dan kadang parameter bentuk memengaruhi hasil. Kecocokan sempurna pada sensor bukan bukti prediksi yang baik di antaranya; smoothing dapat lebih sesuai untuk data berisik. [4]",
          "Bandingkan ketiga metode pada waktu, subset sensor, koordinat, dan target terukur yang sama. Keunggulan Kriging baru bermakna jika bertahan pada perbandingan yang adil. Laporkan pula kegagalan, waktu komputasi, galat di batas ruangan, dan kinerja ketika jumlah sensor berkurang."
        ]
      ],
      [
        "ARIMA dan SARIMA: memodelkan hubungan sepanjang waktu",
        [
          "ARIMA(p,d,q) menggabungkan autoregresi, differencing, dan komponen galat moving average. SARIMA(p,d,q)(P,D,Q)[m] menambahkan komponen musiman dengan periode m dalam jumlah observasi. Untuk siklus harian, m mengikuti interval sampling, bukan selalu 24. [5]",
          "Jadwal lampu dapat menjadi alasan menguji periode harian, tetapi bukan bukti musimannya stabil. Pertumbuhan tanaman, perubahan operasi AC, dan penggantian sensor dapat mengubah proses. Data dua hari hanya memuat dua siklus harian: ratusan sampel tidak menggantikan pengulangan siklus pada berbagai kondisi operasi.",
          "Orde SARIMA yang pernah dibahas adalah kandidat awal, bukan konfigurasi optimal untuk semua data. Pilih orde memakai data latih, periksa residual, lalu nilai pada periode berikutnya. Bila lampu, cuaca, atau aktuator menjadi prediktor, bedakan regresi dengan galat ARIMA atau SARIMAX dari SARIMA univariat. Nilai prediktor masa depan harus sudah diketahui atau diramalkan saat prediksi dibuat."
        ]
      ],
      [
        "Validasi menentukan kekuatan klaim ilmiah",
        [
          "Untuk pemetaan, keluarkan sensor sebelum fitting variogram, tuning parameter, imputasi masukan, atau pelatihan koreksi residual. Bandingkan prediksi dengan pembacaan asli sensor yang disisihkan. Leave-one-sensor-out menguji posisi yang belum diamati; menyisihkan satu zona menguji celah spasial yang lebih sulit.",
          "Untuk peramalan, latih model pada masa lalu dan evaluasi observasi berikutnya melalui rolling origin. Hitung ulang preprocessing menggunakan informasi yang tersedia pada setiap titik prediksi. Bandingkan dengan persistence dan seasonal naive pada horizon yang sama. [6]",
          "Jangan mengimputasi seluruh dataset memakai semua sensor lalu baru menyisihkan satu sensor: nilainya mungkin sudah memengaruhi masukan pelatihan. Jangan pula melakukan interpolasi melintasi waktu masa depan sebelum meramal. Simpan penanda observasi asli dan hasil imputasi; galat utama harus dihitung terhadap pengukuran nyata.",
          "Laporkan MAE dan RMSE per sensor, zona, periode operasi, dan horizon. Untuk prediksi probabilistik, periksa cakupan serta lebar interval. Pisahkan tuning dari evaluasi akhir; gunakan blok waktu yang bermakna ketika menilai ketidakpastian, bukan menganggap sampel berdekatan sebagai eksperimen independen."
        ]
      ],
      [
        "Menggabungkan Kriging dan SARIMA: perlu pengujian menyeluruh",
        [
          "Salah satu rancangan adalah meramal setiap lokasi sensor, lalu memetakan hasilnya ke grid 3D. Alternatifnya, modelkan tren spasial dan ramalkan struktur residual. Keduanya disajikan sebagai rancangan pengembangan, bukan hasil integrasi yang sudah dibuktikan di Tobafarm.",
          "Urutan proses berpengaruh. Pemetaan lebih dahulu dapat memasukkan galat spasial yang saling berkorelasi ke model waktu; peramalan lebih dahulu dapat memasukkan galat ramalan berkorelasi ke peta. Varians Kriging saja bukan ketidakpastian lengkap prediksi gabungan. Uji seluruh pipeline pada lokasi yang disisihkan dan waktu masa depan.",
          "Pertanyaan riset yang tajam ialah apakah prediksi spasial mendeteksi hotspot mendatang lebih baik daripada prediksi rerata ruangan, dengan biaya komputasi yang dapat diterima. Ini lebih konkret daripada sekadar menggabungkan lima algoritme. Ramalan dapat mendukung keputusan supervisori, tetapi bukan pengendali atau jaminan keselamatan."
        ]
      ]
    ],
    "heads": [
      "Metode",
      "Tugas utama",
      "Yang harus diperiksa"
    ],
    "rows": [
      [
        "Kriging",
        "Estimasi spasial",
        "Variogram, tren, anisotropi, galat sensor uji"
      ],
      [
        "IDW",
        "Baseline spasial",
        "Pangkat, lingkungan pencarian, galat batas"
      ],
      [
        "RBF",
        "Permukaan spasial",
        "Kernel, smoothing, skala koordinat"
      ],
      [
        "ARIMA",
        "Ramalan temporal",
        "Orde, residual, akurasi periode berikutnya"
      ],
      [
        "SARIMA",
        "Ramalan temporal musiman",
        "Periode musim, pengulangan siklus, keunggulan atas baseline"
      ]
    ]
  }
} as const;
