const Aluno = require("./Aluno");

const testAwait = async (aluno) => {
    console.log("Dentro Test Await");
    let returnoMedia = await mediaProvaAwait();
    console.log(returnoMedia);

}

const mediaProvaAwait = async() => {
    for (let index = 0; index < 1000000000; index++) {    
    }         
    return 1000;
}  

const aluno = new Aluno();
aluno.nota = 7
aluno.nota = 4

aluno.mediaProva()
console.log("Pos Sincrono");

testAwait(aluno)
console.log("Spinner");


aluno.mediaProvaPromises()
.then((value) => {
    console.log("Success " + value);
})
.catch((value) => {
    console.log("Error " + value);
})

console.log("Spinner2");