"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cobranca = void 0;
class Cobranca {
    constructor(gateway) {
        this.gateway = gateway;
    }
    get gateway() {
        return this._gateway;
    }
    set gateway(value) {
        this._gateway = value;
    }
    setValor(valor) {
        this.gateway.valor = valor;
    }
    setParcelas(valor) {
        this.gateway.parcelas = valor;
    }
    setNumeroCartao(valor) {
        this.gateway.numeroCartao = valor;
    }
    setCvv(valor) {
        this.gateway.cvv = valor;
    }
    realizarPagamento() {
        if (this._gateway.validarCartao()) {
            return this._gateway.realizarPagamento();
        }
        return false;
    }
}
exports.Cobranca = Cobranca;
