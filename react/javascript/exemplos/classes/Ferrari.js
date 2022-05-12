const Carro = require('./Carro');

class Ferrari extends Carro {

    constructor() {
        super();        
        console.log('Constructor Ferrari');
    }    

    acelerar() {
        super.acelerar();
        this.velocidade += 20;
    }

    turbo() {
        this.velocidade += 30;
    }
}

module.exports = Ferrari;