"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnviadoState = void 0;
class EnviadoState {
    constructor() { }
    realizarPagamento() {
        throw new Error("Operação não suportada. O pedido já foi enviado.");
    }
    despacharPedido() {
        throw new Error("Operação não suportada. O pedido já foi enviado.");
    }
    cancelarPedido() {
        throw new Error("Operação não suportada. O pedido já foi enviado.");
    }
}
exports.EnviadoState = EnviadoState;
