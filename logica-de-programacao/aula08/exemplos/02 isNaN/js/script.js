function validaNumero() {
    // lendo o valor inserido no input
    let x = document.getElementById("numero").value;
    // // se não for um número ou estiver vazio
    console.log(x);
    let texto;
    if (isNaN(x) || x=="") {
        texto="Entrada inválida";
    } else {
        texto = "OK";
    }
    document.getElementById("demo").innerHTML = texto;
}