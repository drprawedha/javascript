function panggilObjects() {
  var mobil = {
    type : 'sedan',
    harga : 200,
    warna : 'putih',
    // penambahan array
    tahun : [2001,2002,2005,2010]
  }

  console.log(mobil);
  console.log("type mobil yang dijual adalah " + mobil.type);
  console.log("harga mobil " + mobil.type + " adalah " + mobil.harga + " juta");
  console.log("warna mobil " + mobil.type + " tersebut adalah " + mobil.warna);
  console.log("keluaran tahun "+ mobil.tahun[0]);
  console.log("dibeli tahun "+ mobil.tahun[3]);

}

panggilObjects()
