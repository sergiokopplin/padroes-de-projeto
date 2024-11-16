import { State } from "./State";

export class CanceladoState implements State {
  constructor() {}

  realizarPagamento(): void {
    throw new Error("Operação não suportada. O pedido já foi cancelado.");
  }

  despacharPedido(): void {
    throw new Error("Operação não suportada. O pedido já foi cancelado.");
  }

  cancelarPedido(): void {
    throw new Error("Operação não suportada. O pedido já foi cancelado.");
  }
}
