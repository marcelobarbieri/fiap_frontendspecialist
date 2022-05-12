// null == undefined
// "O" == 0
// 0 == false
// "0" == false

console.log(parseInt("3")); // => 3
console.log(parseInt("3 blind mice")); // => 3
console.log(parseFloat(" 3.14 meters")); // => 3.14
console.log(parseInt("-12.34")); // => -12
console.log(parseInt("0xFF")); // => 255
console.log(parseInt("0xff")); // => 255
console.log(parseInt(".1")); // => NaN, inteiros não podem começar com "."
console.log(parseFloat("$72.47")); // => NaN, números não podem começar com "$"
console.log(parseInt("11", 2)); // => 3, base 2
console.log(parseInt("ff", 16)); // => 255, base hexadecimal
console.log(parseInt("077", 10)); // => 77, base decimal

var n = 123456.789;
n.toFixed(0); //"123457"
n.toFixed(2); //"123456.79”
console.log([1,2,3].toString()); // => "1,2,3"