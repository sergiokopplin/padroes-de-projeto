"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealizarPagamentoState = void 0;
class RealizarPagamentoState {
    constructor(pedido) {
        this.pedido = pedido;
    }
    realizarPagamento() {
        this.pedido.setEstadoAtual(this.pedido.pago);
    }
    despacharPedido() {
        throw new Error("Operação não suportada. O pedido ainda não foi pago.");
    }
    cancelarPedido() {
        this.pedido.setEstadoAtual(this.pedido.cancelado);
    }
}
exports.RealizarPagamentoState = RealizarPagamentoState;
