// Vamos rodar um aplicativo que:
// • Crie uma função chamada addInfo que irá receber um parâmetro com valor 
// opcional “a” e irá juntar com a string “nome: ”.
// • Chamar a função addInfo com os parâmetros “Roberto” e colocar no console.
// • Chamar a função addInfo sem parâmetros e colocar no console.

const addInfo = (nome = 'a') => {
    console.log(`Nome: ${nome}`);
}
addInfo(); // Nome: a
addInfo("Roberto"); // Nome: Roberto