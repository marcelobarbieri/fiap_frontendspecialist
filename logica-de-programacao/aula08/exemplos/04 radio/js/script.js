function verificar() {

    let r = document.getElementsByName("radios");
    console.log(r);
    for (let i = 0; i < r.length ; i++) {
        if (r[i].checked) {
            alert(r[i].value);
        }
    }

    return false;
}