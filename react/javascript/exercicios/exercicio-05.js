// Vamos rodar um aplicativo que:
// • Crie uma função chamada addInfo que irá receber vários parâmetros e irá 
// juntá-los em uma única string separados por vírgula.
// • Chamar a função addInfo com os parâmetros “1”, “2” e “3” e colocar no console.
// • Chamar a função addInfo com os parâmetros “1”, “2”, “3”, “4” e “5” e colocar no 
// console

const addInfo = (...args) => {
    return args.join(', ');
}
console.log(addInfo(1,2,3)); // 1, 2, 3
console.log(addInfo(1,2,3,4,5)); // 1, 2, 3, 4, 5