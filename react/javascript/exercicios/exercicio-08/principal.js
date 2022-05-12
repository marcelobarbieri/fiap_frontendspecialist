const Aluno = require('./Aluno');

let aluno1 = new Aluno('123456','Aluno A',[5,6,7]);
console.log (aluno1.toString());

let aluno2 = new Aluno('654321','Aluno B',[]);
aluno2.notas = 4;
aluno2.notas = 10;
console.log (aluno2.toString());

console.log (new Aluno('123456','Aluno C',[6,7,10]).toString());