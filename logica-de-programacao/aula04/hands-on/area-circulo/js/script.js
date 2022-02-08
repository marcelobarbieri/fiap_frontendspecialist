function calcular() {
    let raio = document.getElementById("raio").value;
    let area = Math.PI * Math.pow(raio,2);
    let comprimento = 2 * Math.PI * raio;

    document.getElementById("area").innerHTML = `Área do círculo: ${area}`;
    document.getElementById("comprimento").innerHTML = `Comprimento da circunferência: ${comprimento}`;
}