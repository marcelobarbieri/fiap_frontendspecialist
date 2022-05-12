// • Criar um objeto com 2 propriedades e um método para dar replace de uma 
// string.
// • Alterar o valor da primeira propriedade.
// • Chamar o método do primeiro objeto e realizar o console.log do replace.

const objeto = {
    prop1: 'Propriedade 1',
    prop2: 'Propriedade 2',
    substituir: (arg) => {
        objeto.prop1 = arg;        
    }
}
console.log(objeto);
objeto.substituir('Propriedade 1 alterada');
console.log(objeto);

