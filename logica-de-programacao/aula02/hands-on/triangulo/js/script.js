let x = parseFloat(prompt("X:"));
let y = parseFloat(prompt("Y:"));
let z = parseFloat(prompt("Z:"));

if ((x >= (y+z)) ||
    (y >= (x+z)) ||
    (z >= (x+y))) {
    alert("Não forma um triangulo");
} else {
    if ((x==y) && (x==z) && (y==z)) {
        alert("Triangulo equilátero.");
    } else if (((x==y)&&(x!=z)) ||
               ((x==z)&&(x!=y)) ||
               ((y==z)&&(y!=x))) {
        alert("Triangulo isoceles.");
    } else {
        alert("Triangulo escaleno");
    }
}