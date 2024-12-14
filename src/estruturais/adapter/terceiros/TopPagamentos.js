"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopPagamentos = void 0;
class TopPagamentos {
    setValorTotal(value) {
        this._valor = value;
    }
    setQuantidadesParcelas(value) {
        this._parcelas = value;
    }
    setCartao(cartao, cvv) {
        this._numeroCartao = cartao;
        this._cvv = cvv;
    }
    realizarPagamento() {
        console.log("Pagamento Realizado via TopPagamentos", this._valor, this._parcelas, this._numeroCartao, this._cvv);
        return true;
    }
}
exports.TopPagamentos = TopPagamentos;
