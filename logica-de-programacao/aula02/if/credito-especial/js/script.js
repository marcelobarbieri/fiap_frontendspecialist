let saldo = parseFloat(prompt("Saldo médio "));
if (saldo <= 200) {
    document.getElementById("mensagem").innerHTML = `Saldo médio: ${saldo} - Nenhum crédito.`;
} else if (saldo <= 400) {
    document.getElementById("mensagem").innerHTML = `Saldo médio: ${saldo} - Crédito (20%): ${0.20*saldo}`;
} else if (saldo <= 600) {
    document.getElementById("mensagem").innerHTML = `Saldo médio: ${saldo} - Crédito (30%): ${0.30*saldo}`;
} else {
    document.getElementById("mensagem").innerHTML = `Saldo médio: ${saldo} - Crédito (40%): ${0.40*saldo}`;
}