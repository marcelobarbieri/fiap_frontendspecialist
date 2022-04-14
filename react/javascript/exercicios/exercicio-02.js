// Vamos inicializar um novo aplicativo que deve realizar os seguintes procedimentos:
// • criar um array de 5 posições com valores strings.
// • Realizar um filtro desse array com todos os itens que começa com a letra a.

let arr1 = ['Altair', 'André', 'Baltair', 'Carlos', 'Dalton'];
let arr2 = arr1.filter(item => item.startsWith('A'));
console.log(arr2);
