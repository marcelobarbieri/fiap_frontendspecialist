// -----------------------------------------------------------------
// Funções JavaScript 
// -----------------------------------------------------------------

function converter() {
    let id = document.querySelector('input[name="opcao"]:checked').id;
    let temperatura = document.getElementById("temperatura").value;
    let resultado = "Convertido para ";
    
    switch (id) {
        case "celsius":
            resultado += paraCelsius(temperatura).toString() + "C";
            break;
        case "fahrenheit":
            resultado += paraFahrenheit(temperatura).toString() + "F";
            break;    
        default:
            resultado = "Opção inválida";
            break;
    }

    document.getElementById("resultado").innerHTML = resultado;
}

function paraFahrenheit(temperatura) {
    return (temperatura * 9 / 5) + 32;
}

function paraCelsius(temperatura) {
    return (5 / 9) * (temperatura - 32);
}


