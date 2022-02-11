function verificarIdade(idade) {    
    return (parseInt(idade) >= 18 ? "Maior" : "Menor") + ` de idade (${idade})`;
}

alert(verificarIdade(17)); // Menor de idade (17)
alert(verificarIdade(18)); // Maior de idade (18)
alert(verificarIdade(19)); // Maior de idade (19)
