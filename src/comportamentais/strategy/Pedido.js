"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
class Pedido {
    constructor() {
        this._valor = 0;
    }
    get valor() {
        return this._valor;
    }
    set valor(value) {
        this._valor = value;
    }
    setTipoFrete(frete) {
        this._frete = frete;
    }
    calculaFrete() {
        return this._frete.calcula(this._valor);
    }
}
exports.Pedido = Pedido;
