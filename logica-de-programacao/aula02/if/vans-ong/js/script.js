let idade=parseInt(prompt("Digite sua idade:"));
let retorno
if (idade < 16) {
    retorno = "Você não pode votar e nem embarcar!";    
} else if (idade < 18) {
    retorno = "Seu voto é facultativo."
} else {
    retorno = "Voto obrigatório, pode embarcar!"
}

document.getElementById("saida").innerHTML = retorno;