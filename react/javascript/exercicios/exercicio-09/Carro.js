class Carro {
    #cor = ""
    #norodas = 4
    #velocidade = 0

    get cor() {
        return this.#cor;
    }

    set cor(valor) {
        this.#cor = valor;
    }

    get norodas() {
        return this.#norodas;        
    }

    set norodas(valor) {
        this.#norodas = valor;
    }

    acelerar(valor) {
        this.#velocidade += valor;
    }

    freiar(valor) {        
        this.#velocidade -= valor;
        if (this.#velocidade < 0)
            this.#velocidade = 0;
    }

    getInfo() {
        return {
            cor: this.#cor,
            norodas: this.#norodas,
            velocidade: this.#velocidade
        }
    }    
}

module.exports = Carro