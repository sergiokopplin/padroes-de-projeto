"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagFacil = void 0;
class PagFacil {
    setValor(value) {
        this.valor = value;
    }
    setParcelas(value) {
        this.parcelas = value;
    }
    setNumeroCartao(value) {
        this.numeroCartao = value;
    }
    setCvv(value) {
        this.cvv = value;
    }
    validarCartao() {
        return this.numeroCartao !== "" && this.cvv !== "" && this.cvv.length === 3;
    }
    realizarPagamento() {
        console.log("Pagamento Realizado via PagFacil", this.valor, this.parcelas);
        return true;
    }
}
exports.PagFacil = PagFacil;
