let vCompra=parseFloat(prompt("Total de compras:"));
let cupom=prompt("Cupom:");
let vFinal
if ((vCompra > 1000) || (cupom == "DESCONTO20")) {
    vFinal = vCompra * (1 - 0.20);
} else {
    vFinal = vCompra;
}
alert(`Valor final da compra ${vFinal}`);