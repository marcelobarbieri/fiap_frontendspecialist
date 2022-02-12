// Insira 10 números inteiros em um vetor A. 
// Crie o vetor B, de mesma dimensão, contendo os elementos de A em ordem inversa

const vetorA = new Array();
for(i=1;i<=10;i++) {
    vetorA.push(i);
}

vetorA.reverse();
const vetorB = vetorA;

alert(vetorB);