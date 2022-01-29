let doacao=parseFloat(prompt("Doação em dólares:"));
let cotacao=parseFloat(prompt("Cotação do dólar:"));
document.getElementById("saida").innerHTML =
    `Doação em dólares: ${doacao}<br/>` +
    `Cotação do dólar (R$): ${cotacao}<br/><br/>` +
    `Doação em reais: ${doacao*cotacao}`;
