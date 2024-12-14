"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagamentoDebito = void 0;
class PagamentoDebito {
    constructor(valor, gateway) {
        this._valor = valor;
        this.gateway = gateway;
    }
    get valor() {
        return this._valor;
    }
    set valor(value) {
        this._valor = value;
    }
    calculaTaxa() {
        return 4;
    }
    calculaDesconto() {
        return this._valor * 0.05;
    }
    realizarCobranca() {
        const valorFinal = this._valor + this.calculaTaxa() - this.calculaDesconto();
        return this.gateway.cobrar(valorFinal);
    }
}
exports.PagamentoDebito = PagamentoDebito;
