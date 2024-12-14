"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
const EnviadoState_1 = require("./EnviadoState");
const PagoState_1 = require("./PagoState");
const RealizarPagamentoState_1 = require("./RealizarPagamentoState");
const CanceladoState_1 = require("./CanceladoState");
class Pedido {
    constructor() {
        this._aguardandoPagamento = new RealizarPagamentoState_1.RealizarPagamentoState(this);
        this._pago = new PagoState_1.PagoState(this);
        this._cancelado = new CanceladoState_1.CanceladoState();
        this._enviado = new EnviadoState_1.EnviadoState();
        this.estadoAtual = this.aguardandoPagamento;
    }
    realizarPagamento() {
        try {
            this.estadoAtual.realizarPagamento();
        }
        catch (error) {
            console.log(error);
        }
    }
    cancelarPedido() {
        try {
            this.estadoAtual.cancelarPedido();
        }
        catch (error) {
            console.log(error);
        }
    }
    despacharPedido() {
        try {
            this.estadoAtual.despacharPedido();
        }
        catch (error) {
            console.log(error);
        }
    }
    setEstadoAtual(estado) {
        try {
            this.estadoAtual = estado;
        }
        catch (error) {
            console.log(error);
        }
    }
    get aguardandoPagamento() {
        return this._aguardandoPagamento;
    }
    set aguardandoPagamento(value) {
        this._aguardandoPagamento = value;
    }
    get pago() {
        return this._pago;
    }
    set pago(value) {
        this._pago = value;
    }
    get cancelado() {
        return this._cancelado;
    }
    set cancelado(value) {
        this._cancelado = value;
    }
    get enviado() {
        return this._enviado;
    }
    set enviado(value) {
        this._enviado = value;
    }
}
exports.Pedido = Pedido;
