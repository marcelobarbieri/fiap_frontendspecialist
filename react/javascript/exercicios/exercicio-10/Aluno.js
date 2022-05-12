class Aluno {

    #matricula=""
    #nome=""
    #media=0
    #nota=[]

    constructor(nome, matricula) {
        this.#nome = nome;
        this.#matricula = matricula;
        this.#nota = [];
    }

    get nome(){
        return this.#nome;
    }

    set nome(valor){
        if(valor.length > 3){
            this.#nome = valor;
        }        
    }

    set nota(valor){
        if(valor >= 0 && valor<= 10){
            this.#nota.push(valor)
        }        
    }
    
    get nota(){
        return this.#nota;
    }

    mediaProva(){
        let somaNotas = 0 ;
        this.#nota.forEach((nota) => {
            somaNotas += nota;
        })

        this.#media = somaNotas/this.#nota.length;
        console.log("MEdia = "+this.#media);
    }

    async mediaProvaAwait(){

        for (let index = 0; index < 1000000000; index++) {
        
        }         
        let somaNotas = 0 ;
        this.#nota.forEach((nota) => {
            somaNotas += nota;
        })

        this.#media = somaNotas/this.#nota.length;
        console.log("MEdia = "+this.#media);

        return this.#media
    }
    
    async mediaProvaPromises(){
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                let somaNotas = 0 ;
                this.#nota.forEach((nota) => {
                    somaNotas += nota;
                })

                this.#media = somaNotas/this.#nota.length;
                console.log("MEdia = "+this.#media);

                resolve(this.#media)
            }, 3000);

        })
    }
    
    alunoAprovado(){
        if(this.#media >= 7){
            return true;
        }
        return false;
    }

    salvarMedia(){
        //salvarBD(this.#matricula,this.#nome, this.#media);
    }
}

module.exports = Aluno