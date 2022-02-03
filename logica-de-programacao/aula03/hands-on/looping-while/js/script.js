function calcular() {
    let num = parseInt(document.getElementById("num").value);
    let res = 1;

    while (num >= 1) {
        res *= num;
        num--;
    }

    document.getElementById("resultado").innerHTML = `Resultado: ${res}`;
}