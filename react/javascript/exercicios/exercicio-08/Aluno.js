class Aluno {

    #matricula = "";
    #nome = "";
    #notas = [];    
    
    #media = 0;

    get nome() {
        return this.#nome;
    }

    set nome(valor) {
        if (valor > 3)
            this.#nome = valor;
    }

    set notas(valor) {
        if (valor >= 0 && valor <= 10)
            this.#notas.push(valor);
    }

    constructor(matricula, nome, notas) {
        this.#matricula = matricula;
        this.#nome = nome;
        this.#notas = notas;
    }

    calcularMedia() {
        let total = 0;
        this.#notas.forEach(nota => total += nota );
        this.#media = total / this.#notas.length;
    }

    verificarAprovado() {
        this.calcularMedia();
        return this.#media >= 7;
    }

    toString() {
        return `${this.#matricula} - ${this.#nome} : \
${this.verificarAprovado() ? 'Aprovado' : 'Reprovado'} \
[(${this.#notas.join(' + ')}) / ${this.#notas.length} = ${this.#media.toFixed(1)}]`;
    }
}

module.exports = Aluno;