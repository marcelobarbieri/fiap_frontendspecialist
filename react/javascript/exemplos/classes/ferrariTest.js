const Carro = require('./Carro');
const Ferrari = require('./Ferrari');

const ferrari1 = new Ferrari();
ferrari1.cor = 'vermelha';
ferrari1.placa = 'AAA-1111';
ferrari1.modelo = 'F40';
ferrari1.acelerar();

console.log(ferrari1.velocidade); // 30
ferrari1.turbo();
console.log(ferrari1.velocidade); // 60



const punto1 = new Carro();
punto1.acelerar();
console.log(punto1.velocidade); // 10



const ferrari2 = ferrari1;
ferrari2.cor = 'amarela';
console.log(ferrari1.cor); // amarela
console.log(ferrari2.cor); // amarela

const ferrari3 = {...ferrari1};
ferrari3.cor = 'azul';
console.log(ferrari1.cor); // amarela
console.log(ferrari3.cor); // azul