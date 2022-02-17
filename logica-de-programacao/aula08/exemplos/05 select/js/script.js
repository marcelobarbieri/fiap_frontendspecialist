function verificar() {
    let comboCidades = document.getElementById("cboCidades");
    let selecionado = comboCidades.options[comboCidades.selectedIndex].value;
    if (selecionado=="sp") {
        document.getElementById("resposta").innerHTML=
            comboCidades.options[comboCidades.selectedIndex].text;
    } else if (selecionado=="sa") {
        document.getElementById("resposta").innerHTML=
            comboCidades.options[comboCidades.selectedIndex].text;
    } else if (selecionado=="sbc") {
        document.getElementById("resposta").innerHTML=
            comboCidades.options[comboCidades.selectedIndex].text;
    } else {
        document.getElementById("resposta").innerHTML= "Selecione uma opção";
    }
}