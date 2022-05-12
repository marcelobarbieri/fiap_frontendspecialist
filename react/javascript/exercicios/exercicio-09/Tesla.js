const Carro = require ('./Carro');

class Tesla extends Carro {
    #itemSerie = ['gps','computador de bordo'];
    #cambio = "automático";
    getInfo() {
        let ret = super.getInfo();
        return {
            ...ret,
            itemSerie: this.#itemSerie,
            cambio: this.#cambio
        }
    }
}
module.exports = Tesla