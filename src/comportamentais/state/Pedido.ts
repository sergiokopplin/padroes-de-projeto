import { EnviadoState } from "./EnviadoState";
import { PagoState } from "./PagoState";
import { RealizarPagamentoState } from "./RealizarPagamentoState";
import { CanceladoState } from "./CanceladoState";
import { State } from "./State";

export class Pedido {
  private _aguardandoPagamento: State;
  private _pago: State;
  private _cancelado: State;
  private _enviado: State;
  private estadoAtual: State;

  constructor() {
    this._aguardandoPagamento = new RealizarPagamentoState(this);
    this._pago = new PagoState(this);
    this._cancelado = new CanceladoState();
    this._enviado = new EnviadoState();

    this.estadoAtual = this.aguardandoPagamento;
  }

  public realizarPagamento() {
    try {
      this.estadoAtual.realizarPagamento();
    } catch (error) {
      console.log(error);
    }
  }

  public cancelarPedido() {
    try {
      this.estadoAtual.cancelarPedido();
    } catch (error) {
      console.log(error);
    }
  }

  public despacharPedido() {
    try {
      this.estadoAtual.despacharPedido();
    } catch (error) {
      console.log(error);
    }
  }

  public setEstadoAtual(estado: State) {
    try {
      this.estadoAtual = estado;
    } catch (error) {
      console.log(error);
    }
  }

  public get aguardandoPagamento(): State {
    return this._aguardandoPagamento;
  }

  public set aguardandoPagamento(value: State) {
    this._aguardandoPagamento = value;
  }

  public get pago(): State {
    return this._pago;
  }

  public set pago(value: State) {
    this._pago = value;
  }

  public get cancelado(): State {
    return this._cancelado;
  }

  public set cancelado(value: State) {
    this._cancelado = value;
  }

  public get enviado(): State {
    return this._enviado;
  }

  public set enviado(value: State) {
    this._enviado = value;
  }
}
