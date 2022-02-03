function somar() {
    let num1=parseInt(document.getElementById("num1").value);
    let num2=parseInt(document.getElementById("num2").value);
    let res = 0;

    for(let i = num1 + 1; i < num2; i++){
        res += i;
    }
    document.getElementById("resultado").innerHTML = `Resultado: ${res}`;
}
