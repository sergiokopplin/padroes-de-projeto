"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoEletronico = void 0;
const Pedido_1 = require("./Pedido");
class PedidoEletronico extends Pedido_1.Pedido {
    constructor() {
        super();
        this._nomeSetor = "";
        this._nomeSetor = "Eletronicos";
    }
    get nomeSetor() {
        return this._nomeSetor;
    }
    set nomeSetor(value) {
        this._nomeSetor = value;
    }
}
exports.PedidoEletronico = PedidoEletronico;
