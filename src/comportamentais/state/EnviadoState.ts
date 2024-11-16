import { State } from "./State";

export class EnviadoState implements State {
  constructor() {}

  realizarPagamento(): void {
    throw new Error("Operação não suportada. O pedido já foi enviado.");
  }

  despacharPedido(): void {
    throw new Error("Operação não suportada. O pedido já foi enviado.");
  }

  cancelarPedido(): void {
    throw new Error("Operação não suportada. O pedido já foi enviado.");
  }
}
