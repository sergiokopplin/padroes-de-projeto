import { Pedido } from "./Pedido";
import { State } from "./State";

export class RealizarPagamentoState implements State {
  private pedido: Pedido;

  constructor(pedido: Pedido) {
    this.pedido = pedido;
  }

  realizarPagamento(): void {
    this.pedido.setEstadoAtual(this.pedido.pago);
  }

  despacharPedido(): void {
    throw new Error("Operação não suportada. O pedido ainda não foi pago.");
  }

  cancelarPedido(): void {
    this.pedido.setEstadoAtual(this.pedido.cancelado);
  }
}
