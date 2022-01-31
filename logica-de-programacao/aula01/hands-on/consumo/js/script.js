let km1=parseFloat(prompt("Quilômetro inicial:"));
let km2=parseFloat(prompt("Quilômetro final:"));
let L=parseFloat(prompt("Litros abastecidos:"));
let consumo=(km2-km1)/L;
document.getElementById("saida").innerHTML = 
    `Quilômetro inicial: ${km1}<br/>` +
    `Quilômetro final: ${km2}<br/>` +
    `Litros abastecidos: ${L}<br/>` +
    `Consumo (km/L): ${consumo}`; 