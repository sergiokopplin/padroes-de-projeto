"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagamentoCredito = void 0;
class PagamentoCredito {
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
        return this._valor * 0.05;
    }
    calculaDesconto() {
        if (this._valor > 300) {
            return this._valor * 0.02;
        }
        return 0;
    }
    realizarCobranca() {
        const valorFinal = this._valor + this.calculaTaxa() - this.calculaDesconto();
        return this.gateway.cobrar(valorFinal);
    }
}
exports.PagamentoCredito = PagamentoCredito;
