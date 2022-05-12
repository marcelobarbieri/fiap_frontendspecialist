// JSON.parser.online.fr

const pessoa = {
    nome: 'Pedro',
    idade: 20
};

const info = {
    info1: 'Informação 1',
    info2: 'Informação 2',
    info3: 'Informação 3',
    info4: {
        prop1: 'Propriedade 1',
        prop2: 'Propriedade 2',
    }
};


const str = JSON.stringify(info);
console.log(str); // {"info1":"Informação 1","info2":"Informação 2","info3":"Informação 3","info4":{"prop1":"Propriedade 1","prop2":"Propriedade 2"}}

const obj = JSON.parse(str);
console.log(obj); 
// {
//   info1: 'Informação 1',
//   info2: 'Informação 2',
//   info3: 'Informação 3',
//   info4: { prop1: 'Propriedade 1', prop2: 'Propriedade 2' }
// }

pessoa.nome = 'João'; // { nome: 'João', idade: 20 }
console.log(pessoa);

const info2 = {
    info1: 'Informação 1',
    info2: 'Informação 2',
    info3: 'Informação 3',
    info4: {
        prop1: 'Propriedade 1',
        prop2: 'Propriedade 2',
    },
    abrir: (param1) => {
        console.log(param1);
    }
}

info2.abrir("Teste"); // Teste