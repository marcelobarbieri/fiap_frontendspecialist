const Fusca = require('./Fusca');
const Tesla = require('./Tesla');

const fusca = new Fusca();
const tesla = new Tesla();

fusca.cor = 'Amarela';
fusca.norodas = 4;
fusca.acelerar(10);
console.log(fusca.getInfo());

tesla.cor = 'cinza';
tesla.norodas = 4;
tesla.acelerar(20);
console.log(tesla.getInfo());
