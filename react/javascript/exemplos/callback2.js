let cont = 1
const test = () => {
    console.log(`${cont} - Rodando callback`);

    cont++;
    if (cont >= 10)
        clearInterval(info);
}

console.log('Ponto 1');

setTimeout(test, 3000);

console.log('Ponto 2');

let info = setInterval(test,1000);

// Ponto 1
// Ponto 2
// 1 - Rodando callback
// 2 - Rodando callback
// 3 - Rodando callback
// 4 - Rodando callback
// 5 - Rodando callback
// 6 - Rodando callback
// 7 - Rodando callback
// 8 - Rodando callback
// 9 - Rodando callback