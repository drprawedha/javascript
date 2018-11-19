function panggilSplice() {
  var kota = ['jakarta','medan','padang','malang'];
  console.log(kota[0]);

  // splice menyisipkan data kedalam array sesuka kita
  kota.splice(2,1,'denpasar')
  kota.splice(1,1,'solo')
  // 2 berarti no array kedua
  // 0 berarti data tidak dihapus, namun jika diganti
  // 1 berarti data dihapus
  return kota;
}

console.log(panggilSplice());
