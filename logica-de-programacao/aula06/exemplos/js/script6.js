// -----------------------------------------------------------------
// Parâmetro Padrão
// -----------------------------------------------------------------

// exemplo 1

function retorna(a=2) {
    return a;
}
alert(retorna(3)); // 3
alert(retorna());; // 2

// function retorna(valor) {
//     let a = 2;
//     if (valor != undefined)
//         a = valor;
//     return a;
// }

// exemplo 2

function gravarAluno(nome,telefone,cidade="São Paulo") {
    return `${nome}, ${telefone}, ${cidade}`;
}

alert(gravarAluno("Alex","2222-2222"));
alert(gravarAluno("Eduardo","3333-3333","Guarulhos"));

// function gravarAluno(cidade) {
//     let x="São Paulo";
//     if (cidade != undefined)
//         x=cidade;
//     alert(x);
// }

// exemplo 3

const pessoa = {
    nome: "Alex",
    idade: 45
}

function exibir(x) {
    alert(`${x.nome} - ${x.idade}`);
}

exibir(pessoa);