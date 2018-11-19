function panggilconcat() {
  var kota = ["jakarta","bandung","semarang","surabaya"];
  var kabupaten = ["sukoharjo","sragen","karanganyar","boyolali","klaten"];
  // concat digunakan untuk menggabungkan dua array
  var hasil = kota.concat(kabupaten);
  return hasil;

}

console.log(panggilconcat());
