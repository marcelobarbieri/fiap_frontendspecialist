a = "Rubens";

console.log(a); // Rubens
console.log(a[0]); // R
console.log(a[5]); // s

console.log(a + " teste"); // Rubens teste



b = 1
c = 2
console.log(b); // 1
console.log(c); // 2
console.log(b+c); // 3

c = "2"
console.log(b+c); // 12



d = "teste\
ssfsd";
console.log(d); // testessfsd



var str1 = 'hello';
var str2 = "world";
var res = `${str1} ${str2}`;
console.log(res); // hello world



console.log(str1.length); // 5
console.log(str1.toUpperCase()); // HELLO
console.log(str1.toLowerCase()); // hello
console.log(str1.charAt(0)); // h
console.log(str1.slice(-3)); // olo
console.log(str1.slice(1,3)); // el
console.log(str1.substring(1,4)); // ell
console.log(str1.indexOf('l')); // 2
console.log(str1.lastIndexOf('l')); // 3

var3 = "1,2,3";
var4 = var3.split(',');
console.log(var4); // ["1", "2", "3"]
console.log(var4[0]); // 1

console.log(str1.includes('ell')); // true
console.log(str1.toLowerCase().includes('Ell'.toLowerCase())); // true
console.log(str1.includes('1234')); // false

