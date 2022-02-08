// Na compra de duas unidades de um mesmo medicamento, 
// o cliente recebe como o desconto os centavos do valor final. 
// Elaborar um programa que leia descrição e preço de um 
// medicamento. Informe o valor do produto na promoção. 

// Exemplo: 
// Medicamento: Aspirina 
// Preço R$: 7.30 
// Promoção da Aspirina Leve 2 por apenas R$: 14.00

function calcular() {
    document.getElementById("resultado").innerHTML = `Valor final ${2 * Math.floor(7.30)}`;
}