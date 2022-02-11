// -----------------------------------------------------------------
// Outros Parâmetros
// -----------------------------------------------------------------

const pessoa = [
    {
        nome: "Alex",
        idade: 45
    }, 
    {
        nome:"José",
        idade: 60
    }]

function exibir(x) {
    alert(`${x.nome} - ${x.idade}`);
}

exibir(pessoa[0]);
exibir(pessoa[1]);