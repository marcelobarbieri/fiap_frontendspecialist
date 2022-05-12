class Carro {
    modelo = "";
    placa = "";
    cor= "vermelha";
    velocidade = 0;
    #rodas = 4;

    constructor() {
        console.log("Constructor");
        this.modelo = 'Ford Ka';
    }

    acelerar() {
        this.velocidade += 10;
        this.#rodas = 6;
    }

    freiar() {
        this.velocidade -= 10;
    }
}

// export default Carro;
module.exports = Carro;

// por causa do babel, o babel não reconhece o export default
// o react incorpora o babel no build

// babel, transpilador de javascript
 