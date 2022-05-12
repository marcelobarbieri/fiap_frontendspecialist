// import Carros from './Carro';
const Carro = require('./Carro');

let punto1 = new Carro(); // Constructor
punto1.cor = 'amarela';
punto1.acelerar();

console.log(punto1.cor); // amarela
console.log(punto1.velocidade); // 10
console.log(punto1.rodas); // undefined

let punto2 = new Carro(); // Constructor
punto2.cor = 'verde';
punto2.acelerar();
punto2.acelerar();

console.log(punto2.cor); // verde
console.log(punto2.velocidade); // 20

punto2.freiar();
console.log(punto2.velocidade); // 10


