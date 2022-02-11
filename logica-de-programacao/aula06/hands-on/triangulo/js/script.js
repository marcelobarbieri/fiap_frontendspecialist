function verificarTriangulo(l1,l2,l3) {
    
    if ((l1 >= (l2+l3)) ||
        (l2 >= (l1+l3)) ||
        (l3 >= (l1+l2))) {
        return "Não forma um triângulo";
    } else {
        if ((l1==l2) && (l1==l3)) {
            return "Triangulo equilátero.";
        } else if (l1!=l2 && l1!=l3 && l2!=l3) {
            return "Triangulo escaleno";
        } else {        
            return "Triângulo isóceles.";
        }
    }
}

alert(verificarTriangulo(1,1,2)); // Não forma um triângulo
alert(verificarTriangulo(3,3,3)); // Triângulo equilátero
alert(verificarTriangulo(2,3,4)); // Triângulo escaleno
alert(verificarTriangulo(2,2,3)); // Triângulo isóceles