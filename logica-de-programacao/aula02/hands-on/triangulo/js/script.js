let l1 = parseFloat(prompt("Lado 1:"));
let l2 = parseFloat(prompt("Lado 2:"));
let l3 = parseFloat(prompt("Lado 3:"));

if ((l1 >= (l2+l3)) ||
    (l2 >= (l1+l3)) ||
    (l3 >= (l1+l2))) {
    alert("Não forma um triangulo");
} else {
    if ((l1==l2) && (l1==l3)) {
        alert("Triangulo equilátero.");
    } else if (l1!=l2 && l1!=l3 && l2!=l3) {
        alert("Triangulo escaleno");
    } else {        
        alert("Triangulo isoceles.");
    }
}