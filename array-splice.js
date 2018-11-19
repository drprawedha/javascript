function panggilSplice() {
  var kota = ['jakarta','medan','padang','malang'];
  console.log(kota[0]);
  // splice menyisipkan data kedalam array sesuka kita
  kota.splice(2,1,'denpasar')
  kota.splice(1,1,'solo')
  // 2 berarti no array kedua
  // 0 berarti 0 data dihapus, namun jika diganti
  // 1 berarti 1 data dihapus
  console.log(kota);
  console.log('menghapus data kedua ketiga');
  kota.splice(2,2)
  // 2 berarti no array kedua
  // 0 berarti data tidak dihapus, namun jika diganti
  // 2 berarti 2 data dihapus

  return kota;
}

console.log(panggilSplice());
