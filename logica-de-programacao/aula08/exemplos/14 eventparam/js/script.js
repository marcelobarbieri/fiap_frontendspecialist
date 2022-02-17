let p1 = 5;
let p2 = 7;

document.getElementById("meuBtn").addEventListener(
    "click",
    function () {
        myFunction(p1,p2);
    }
)

function myFunction(a,b) {
    document.getElementById("teste").innerHTML = a * b;
}