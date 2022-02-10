// // --------------------------------------------------------------------------------
// // arrays JavaScript
// // --------------------------------------------------------------------------------

// // formas de declarar um array

// const carrosA = ["Renegade","Toro","Ranger"];

// const carrosB = [
//     "Renegade",
//     "Toro",
//     "Ranger"
// ];
 
// const carrosC = [];
// carrosC[0] = "Renegade";
// carrosC[1] = "Toro";
// carrosC[2] = "Ranger";

// const carrosD = new Array("Renegade","Toro","Ranger"); 

// // --------------------------------------------------------------------------------
// // arrays são objetos
// // --------------------------------------------------------------------------------

// // armazena diferentes tipos

// const pessoa1=["José","Rua X",46]; 
// alert(pessoa1[0]); // José
// alert(pessoa1[2]); // 46

// // nomes para acesso aos membros

// const pessoa2 = { primeiroNome:"José", Endereco:"Rua X", Idade:46 };
// alert(pessoa2.primeiroNome); // José
// alert(pessoa2); // [object Object]
// alert(`${pessoa2.primeiroNome}, ${pessoa2.Endereco}, ${pessoa2.Idade}`); // José, Rua X, 46

// // elementos podem ser objetos

// const meuArray=[];
// const carros2 = ["Renegade","Toro","Ranger"];
// const d = new Date();
// meuArray[0]=d.toDateString()
// meuArray[1]=carros2;
// alert(meuArray); // Wed Feb 09 2022,Renegade,Toro,Ranger                    

// // --------------------------------------------------------------------------------
// // propriedades e métodos dos arrays
// // --------------------------------------------------------------------------------

// // length

// const frutas1 = ["Banana","Laranja","Maça","Manga"];

// alert(frutas1.length); // 4
// alert(frutas1[0]); // Banana
// alert(frutas1[frutas1.length-1]); // Manga

// // push - adiciona novo elemento no final da lista

// const frutas2 = ["Banana","Laranja","Maça","Manga"];
// alert(frutas2); // Banana,Laranja,Maça,Manga
// frutas2.push("Morango");
// alert(frutas2); // Banana,Laranja,Maça,Manga,Morango//

// // pop - remote o último elemento

// const frutas3 = ["Banana","Laranja","Maça","Manga"];
// alert(frutas3); // resultado: Banana,Laranja,Maça,Manga

// frutas3.pop();
// alert(frutas3); // resultado: Banana,Laranja,Maça

// // shift - remove o primeiro elemento e ajusta os índices

// const frutas4 = ["Banana","Laranja","Maça","Manga"];
// alert(frutas4); // Banana,Laranja,Maça,Manga
// alert(frutas4.length); // 4

// frutas4.shift();
// alert(frutas4); // Laranja,Maça,Manga
// alert(frutas4.length); // 3

// // unshift - adiciona elemento no inicio da lista

// const frutas5 = ["Banana","Laranja","Maça","Manga"];
// alert(frutas5); // Banana,Laranja,Maça,Manga

// frutas5.unshift("Limão"); 
// alert(frutas5); // Limão,Banana,Laranja,Maça,Manga

// // delete - remove o elemento sem ajustar os índices

// const frutas6 = ["Banana","Laranja","Maça","Manga"];
// alert(frutas6); // Banana,Laranja,Maça,Manga
// alert(frutas6.length); // 4

// delete frutas6[1];
// alert(frutas6); // Banana,,Maça,Manga
// alert(frutas6.length); // 4

// // splice - elimina/ insere elementos no array

// const frutas7 = ["Banana","Laranja","Maça","Manga"];
// alert(frutas7); // Banana,Laranja,Maça,Manga

// frutas7.splice(2,0,"Limão","Kiwi");
// alert(frutas7); // Banana,Laranja,Limão,Kiwi,Maça,Manga

// // join - une os elementos através de uma string

// const frutas8 = ["Banana","Laranja","Maça","Manga"];
// alert(frutas8.join(" - ")); // Banana - Laranja - Maça - Manga

// // concat

// const frutas9 = ["Banana","Laranja","Maça","Manga"];
// const verduras1 = ["Couve","Brócolis"];

// const comidas1 = frutas9.concat(verduras1);
// alert(comidas1); // Banana,Laranja,Maça,Manga,Couve,Brócolis

// // slice - divie parte de uma matriz em nova matriz a paritr do valor do parâmetro

// const comidas2 = ["Banana","Laranja","Maçã","Manga","Couve","Brócolis"]
// const verduras2 = comidas2.slice(4);
// alert(verduras2); // Couve,Brócolis

// // sort e reverse

// const frutas10 = ["Laranja","Banana","Manga","Maçã"];

// frutas10.sort();
// alert(frutas10); // Banana,Laranja,Manga,Maçã

// frutas10.reverse();
// alert(frutas10); // Maçã,Manga,Laranja,Banana



// // --------------------------------------------------------------------------------
// // percorrendo um array
// // --------------------------------------------------------------------------------

// for (exemplo 1)

const frutas11 = ["Banana","Laranja","Maçã","Manga"];

let text1 = "<ul>";
for (let i=0; i < frutas11.length; i++) {
    text1 += "<li>" + frutas11[i] + "</li>";
}
text1 += "</ul>";
document.getElementById("saida1").innerHTML = text1;

// . Banana
// . Laranja
// . Maçã
// . Manga

// for (exemplo 2)

const comidas3=["Banana","Laranja","Maçã","Manga","Couve","Brócolis"];
let listaComidas1="";
for (let i = 0; i < comidas3.length; i++) {
    listaComidas1 += comidas3[i]+"<br/>";
}
document.getElementById("saida2").innerHTML = listaComidas1;

// Banana
// Laranja
// Maçã
// Manga
// Couve
// Brócolis

// foreach (exemplo 1)

const frutas12 = ["Banana","Laranja","Maçã","Manga"];

var text2 = "<ul>";
frutas12.forEach(minhaFuncao1);
text2 += "</ul>";
document.getElementById("saida3").innerHTML = text2;

function minhaFuncao1(value) {
    text2 += "<li>" + value + "</li>";
}

// . Banana
// . Laranja
// . Maçã
// . Manga

// foreach (exemplo 2)

const comidas4=["Banana","Laranja","Maçã","Manga","Couve","Brócolis"];
let listaComidas2="";

comidas4.forEach(criarLista1);
document.getElementById("saida4").innerHTML = listaComidas2;

function criarLista1(value) {
    listaComidas2 += value + "<br/>";
}

// Banana
// Laranja
// Maçã
// Manga
// Couve
// Brócolis

// map (exemplo 1)

const frutas13 = ["Banana","Laranja","Maçã","Manga"];

var text3 = "<ul>";
frutas13.map(minhaFuncao2);
text3 += "</ul>";
document.getElementById("saida5").innerHTML = text3;

function minhaFuncao2(value) {
    text3 += "<li>" + value + "</li>";
}

// . Banana
// . Laranja
// . Maçã
// . Manga

// map (exemplo 2)

const comidas5=["Banana","Laranja","Maçã","Manga","Couve","Brócolis"];
let listaComidas3="";

comidas5.map(criarLista2);
document.getElementById("saida6").innerHTML = listaComidas3;

function criarLista2(value) {
    listaComidas3 += value + "<br/>";
}

document.getElementById("saida6").innerHTML = listaComidas3;

// Banana
// Laranja
// Maçã
// Manga
// Couve
// Brócolis