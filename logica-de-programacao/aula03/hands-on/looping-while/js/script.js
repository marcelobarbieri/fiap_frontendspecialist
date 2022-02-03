function calcular() {
    let num = document.getElementById("num").value;
    let res = 1;

    do {
        res *= num;
        num--;
    } while(num>=1);

    document.getElementById("resultado").innerHTML = `Resultado: ${res}`;
}