// Elabore um programa em JavaScript que contenha o nome de 5 pessoas em um vetor A, outras 5 pessoas em um vetor B. 
// Crie o vetor C, com o dobro da capacidade, contendo os elementos do vetor A e do Vetor B.

const vetorA = new Array();
for(let i=1; i<=5; i++) {
    vetorA.push("Nome " + i.toString());
}

const vetorB = new Array();
for(let i=6; i<=10; i++) {
    vetorB.push("Nome " + i.toString());
}

const vetorC = vetorA.concat(vetorB);

alert(vetorC);