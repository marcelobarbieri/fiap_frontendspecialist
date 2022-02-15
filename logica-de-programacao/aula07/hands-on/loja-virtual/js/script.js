/* Crie uma página para uma loja virtual. A página deve conter a 
 * descrição do produto "Baralho de Uno", que custa R$ 25,00. O usuário
 * deve então informar em quantas parcelas ele deseja pagar e a página
 * deve então calcular o valor de cada uma delas
 */

function calcular() {
    let valor = parseFloat(document.getElementById("valor").value);
    let parcelas = parseInt(document.getElementById("parcelas").value);    
    let saida = "";
    let parcela = valor / parcelas;

    for (let i=1;i<=parcelas;i++){        
        saida += `Parcela ${i}/${parcelas}: R$ ${parcela.toFixed(2)} <br>`;
    }

    document.getElementById("saida").innerHTML = saida;
}