"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagamentoDinheiro = void 0;
class PagamentoDinheiro {
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
        return 0;
    }
    calculaDesconto() {
        return this._valor * 0.1;
    }
    realizarCobranca() {
        const valorFinal = this._valor + this.calculaTaxa() - this.calculaDesconto();
        return this.gateway.cobrar(valorFinal);
    }
}
exports.PagamentoDinheiro = PagamentoDinheiro;
