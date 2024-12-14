"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoMoveis = void 0;
const Pedido_1 = require("./Pedido");
class PedidoMoveis extends Pedido_1.Pedido {
    constructor() {
        super();
        this._nomeSetor = "";
        this._nomeSetor = "Moveis";
    }
    get nomeSetor() {
        return this._nomeSetor;
    }
    set nomeSetor(value) {
        this._nomeSetor = value;
    }
}
exports.PedidoMoveis = PedidoMoveis;
