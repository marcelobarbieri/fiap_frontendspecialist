let elogio=parseInt(prompt("Elogios \n1 - profissional \n2 - físico \n3 - pessoal \n\nOpção:"));
switch (elogio) {
    case 1:
        document.getElementById("mensagem").innerHTML = "Elogio profissional";
        break;
    case 2:
        document.getElementById("mensagem").innerHTML = "Elogio físico";
        break;
    case 3:
        document.getElementById("mensagem").innerHTML = "Elogio pessoal";
        break;
    default:
        document.getElementById("mensagem").innerHTML = "Opção inválida";
}