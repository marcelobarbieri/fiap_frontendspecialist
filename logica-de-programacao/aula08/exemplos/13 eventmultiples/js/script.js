var x = document.getElementById("meuBtn");
x.addEventListener("click",minhaFuncao);
x.addEventListener("click",outraFuncao);

function minhaFuncao() {
    alert("Hello World!");
}

function outraFuncao() {
    alert("Esta também foi executada!");
}