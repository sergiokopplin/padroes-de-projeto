"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CanceladoState = void 0;
class CanceladoState {
    constructor() { }
    realizarPagamento() {
        throw new Error("Operação não suportada. O pedido já foi cancelado.");
    }
    despacharPedido() {
        throw new Error("Operação não suportada. O pedido já foi cancelado.");
    }
    cancelarPedido() {
        throw new Error("Operação não suportada. O pedido já foi cancelado.");
    }
}
exports.CanceladoState = CanceladoState;
