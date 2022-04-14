// Vamos inicializar um novo aplicativo que deve realizar os seguintes procedimentos:
// • criar um array de 5 posições com valores strings.
// • Juntar com um array de 3 posições
// • Adicionar o item “1”
// • Adicionar o item “2”
// • Retirar a primeira posição do array

let arr1 = ['a', 'b', 'c', 'd', 'e'];
let arr2 = ['x', 'y', 'z'];
let arr3 = arr1.concat(arr2);
console.log(arr3);

arr3.push('1');
arr3.push('2');
console.log(arr3);

arr3.shift();
console.log(arr3);