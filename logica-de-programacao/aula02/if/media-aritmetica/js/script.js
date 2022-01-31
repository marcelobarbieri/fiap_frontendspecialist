let nota1=parseFloat(prompt("Nota 1:"));
let nota2=parseFloat(prompt("Nota 2:"));
let nota3=parseFloat(prompt("Nota 3:"));
let media=(nota1+nota2+nota3)/3;
if (media>=7){
    document.getElementById("media").innerHTML = `Aprovado! Média: ${media.toFixed(1)}`
} else if (media >= 4) {
    document.getElementById("media").innerHTML = `Prova Final! Média: ${media.toFixed(1)}`
} else {
    document.getElementById("media").innerHTML = `Reprovado! Média: ${media.toFixed(1)}`
}
