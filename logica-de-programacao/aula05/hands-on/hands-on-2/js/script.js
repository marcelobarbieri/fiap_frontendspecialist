// Faça um programa com os nomes de 20 alunos em um vetor A. 
// Divida este vetor ao meio guardando a segunda metade de nomes em um novo vetor.

const vetorA = new Array();

for (let i=1; i<=20; i++)
{
    vetorA.push("Aluno " + i.toString());
}

const vetorB = vetorA.slice(vetorA.length/2);

alert(vetorB); // Aluno 11,Aluno 12,Aluno 13,Aluno 14,Aluno 15,Aluno 16,Aluno 17,Aluno 18,Aluno 19,Aluno 20