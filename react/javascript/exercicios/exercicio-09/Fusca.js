const Carro = require ('./Carro');

class Fusca extends Carro {
    #itemSerie = ['retrovisor','paralama'];
    #cambio = "manual";
    getInfo() {
        let ret = super.getInfo();
        return {
            ...ret,
            itemSerie: this.#itemSerie,
            cambio: this.#cambio
        }
    }
}
module.exports = Fusca