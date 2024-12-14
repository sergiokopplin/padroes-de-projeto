"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagoState = void 0;
class PagoState {
    constructor(pedido) {
        this.pedido = pedido;
    }
    realizarPagamento() {
        throw new Error("Operação não suportada. O pedido já foi pago.");
    }
    despacharPedido() {
        this.pedido.setEstadoAtual(this.pedido.enviado);
    }
    cancelarPedido() {
        this.pedido.setEstadoAtual(this.pedido.cancelado);
    }
}
exports.PagoState = PagoState;
