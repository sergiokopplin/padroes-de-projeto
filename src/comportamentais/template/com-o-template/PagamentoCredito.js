"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagamentoCredito = void 0;
const Pagamento_1 = require("./Pagamento");
class PagamentoCredito extends Pagamento_1.Pagamento {
    calculaTaxa() {
        return this.valor * 0.05;
    }
    calculaDesconto() {
        if (this.valor > 300) {
            return this.valor * 0.02;
        }
        return 0;
    }
}
exports.PagamentoCredito = PagamentoCredito;
