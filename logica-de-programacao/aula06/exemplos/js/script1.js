// -----------------------------------------------------------------
// Funções JavaScript 
// -----------------------------------------------------------------

// exemplo 1

paraCelsius1();

function paraCelsius1() {
    let f1=80;
    let c1=(5/9)*(f1-32);    
    alert(`Exemplo 1 - Temperatura em graus C=${c1.toString()}`);
}

// exemplo 2

paraCelsius2(80);

function paraCelsius2(f2) {
    let c2=(5/9)*(f2-32);    
    alert(`Exemplo 2 - Temperatura em graus C=${c2.toString()}`);
}

// exemplo 3

paraFahrenheit(25);

function paraFahrenheit(c3) {
    let f3=(c3*9/5)+32;
    alert(`Exemplo 3 - Temperatura em graus F=${f3.toString()}`);
}

// exemplo 4

alert(`Exemplo 4 - Tempratura em graus C=${paraCelsius4(80)}`); // 26.666666666666668

function paraCelsius4(f4) {
    return (5/9) * (f4-32);
}
