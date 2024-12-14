"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopPagamentosAdapter = void 0;
class TopPagamentosAdapter {
    constructor(topPagamentos) {
        this.topPagamentos = topPagamentos;
    }
    setValor(value) {
        this.topPagamentos.setValorTotal(value);
    }
    setParcelas(value) {
        this.topPagamentos.setQuantidadesParcelas(value);
    }
    setNumeroCartao(value) {
        this.topPagamentos.setCartao(value, this.cvv);
    }
    setCvv(value) {
        this.cvv = value;
    }
    validarCartao() {
        return true;
    }
    realizarPagamento() {
        return this.topPagamentos.realizarPagamento();
    }
}
exports.TopPagamentosAdapter = TopPagamentosAdapter;
