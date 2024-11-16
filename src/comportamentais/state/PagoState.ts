import { Pedido } from "./Pedido";
import { State } from "./State";

export class PagoState implements State {
  private pedido: Pedido;

  constructor(pedido: Pedido) {
    this.pedido = pedido;
  }

  realizarPagamento(): void {
    throw new Error("Operação não suportada. O pedido já foi pago.");
  }

  despacharPedido(): void {
    this.pedido.setEstadoAtual(this.pedido.enviado);
  }

  cancelarPedido(): void {
    this.pedido.setEstadoAtual(this.pedido.cancelado);
  }
}
