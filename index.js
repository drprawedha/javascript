var message = "Hello coding";
let msg1 = "Hallo";
// var dan let dapat dirubah
// var berlaku disemua tempat
// sedangkan let hanya diluar if else
// karna penulisan let hanya berlaku pada satu tempat saja

const msg2 = "Coding";
// nilainya tidak boleh dirubah

msg1 = "Rubah 2"

if (true) {
  var message = 1;
  let msg1 = 2;
  // semisal untuk let nya
  console.log("testing ini 'let' dalam curl bracket  ' ", msg1, "'");

}

console.log(message);
console.log(msg1);
