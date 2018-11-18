/// array untuk menghapus data paling pertama
function panggilShift() {
  var kota = ['jakarta','bandung','malang','surakarta']
  console.log(kota);
  console.log("------------------------------------------------");
  //kota = kota.shift();
  var  kota2 = kota.shift()

  return kota;
  // hasil yang sudah dihapus via shift
}
console.log(panggilShift());
// digunakan console.log apabila menggunakan return
