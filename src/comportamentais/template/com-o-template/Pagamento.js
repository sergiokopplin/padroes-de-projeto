"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagamento = void 0;
class Pagamento {
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
    // Esse método é definido com um retorno padrão, para que uma das subclasses possam reutilizar, não sendo obrigatório a sua definição
    calculaTaxa() {
        return 0;
    }
    // Esse é o template Method
    // O que dá o nome a esse padrão
    realizarCobranca() {
        const valorFinal = this._valor + this.calculaTaxa() - this.calculaDesconto();
        return this.gateway.cobrar(valorFinal);
    }
}
exports.Pagamento = Pagamento;
