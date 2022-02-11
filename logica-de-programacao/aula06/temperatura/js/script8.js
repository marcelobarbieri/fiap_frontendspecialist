// -----------------------------------------------------------------
// Escopo de Função
// -----------------------------------------------------------------

function minhaFuncao() {
    let minhaVariavel = "Variável no escopo de função";
    return minhaVariavel;
}
alert(minhaFuncao()); // Variável no escopo de função
alert(minhaVariavel); // Uncaught ReferenceError: minhaVariavel is not defined

// utilizando let ou var 
// alert(minhaVariavel); // Uncaught ReferenceError: minhaVariavel is not defined

// sem utilizar let e var, escopo global 
// alert(minhaVariavel); // Variável no escopo de função