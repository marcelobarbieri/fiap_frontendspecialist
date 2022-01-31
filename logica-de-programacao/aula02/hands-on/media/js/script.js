let nota1=parseFloat(prompt("Nota 1 (0-10):"));
let nota2=parseFloat(prompt("Nota 2 (0-10):"));
let media = (nota1 + nota2) / 2;

let aulasDadas=prompt("Aulas dadas:");
let aulasAssistidas=prompt("Aulas assistidas:");
let frequencia= (aulasAssistidas/aulasDadas) * 100;

let situacao
if ((media >= 7) && (frequencia >= 75)) {
    situacao = "Aprovado";
} else {
    situacao = "Reprovado";
}

alert(`Média: ${media} - Frequência: ${frequencia}% - Situação: ${situacao}`);
