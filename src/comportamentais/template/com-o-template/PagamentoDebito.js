"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagamentoDebito = void 0;
const Pagamento_1 = require("./Pagamento");
class PagamentoDebito extends Pagamento_1.Pagamento {
    calculaTaxa() {
        return 4;
    }
    calculaDesconto() {
        return this.valor * 0.05;
    }
}
exports.PagamentoDebito = PagamentoDebito;
