"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagamentoDinheiro = void 0;
const Pagamento_1 = require("./Pagamento");
class PagamentoDinheiro extends Pagamento_1.Pagamento {
    calculaDesconto() {
        return this.valor * 0.1;
    }
}
exports.PagamentoDinheiro = PagamentoDinheiro;
