var now = new Date();
var data = new Date(2022, 04, 12, 19, 39, 00);

console.log(now); // 2022-04-13T22:42:59.750Z
console.log(data); // 2022-05-12T22:39:00.000Z

dif = now - data;

console.log(dif); // 72608055268 (ms)

console.log(now.getFullYear()); // 2022
console.log(now.getMonth()); // 4
console.log(now.getDate()); // 13
console.log(now.getDay()); // 3
console.log(now.getHours()); // 19
console.log(now.getMinutes()); // 42
console.log(now.getSeconds()); // 59
console.log(now.getMilliseconds()); // 750
console.log(now.toLocaleDateString()); // 13/05/2022

// momentjs.com
// https://moment.github.io/luxon/#/
// https://lodash.com/