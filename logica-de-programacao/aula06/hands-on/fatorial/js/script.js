function calcularFatorial(valor) {
    let res = 1;
    let num = valor;
    while (num >= 1) {
        res *= num;
        num--;
    }    
    return `${valor}! = ${res}`;
}

alert(calcularFatorial(3));
alert(calcularFatorial(4));
alert(calcularFatorial(5));