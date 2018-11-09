function typedata() {
  var data = 'bandung';

  if (data == 'jakarta') {
    return data
  } else {
    return 'bukan jakarta';
  }
}

//console.log(typedata());

function typedata2() {
  var data = 2;
  console.log(typeof(data));
  // var data2 = 2;
  // console.log(typeof(data2));
  if (data === '2') {
    return 'sukses'
    // apabila == maka ia tidak mempeduikan itu string atau number
    // maka diusahakan gunakan ===
  } else {
    return 'gagal';
  }
}

console.log(typedata2());
// maka untuk operasi aritmatik
// pastikan gunakan type data number
