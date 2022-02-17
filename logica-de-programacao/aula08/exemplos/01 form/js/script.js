function validarForm() {
    let x = document.forms["meuForm"]["txtnome"].value;
    if(x == "") {
        alert("Preencha o campo nome");
        return false;
    }
}