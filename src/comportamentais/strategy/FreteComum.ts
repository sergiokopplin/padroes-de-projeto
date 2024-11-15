import { Frete } from "./Frete";

export class FreteComum implements Frete {
  calcula(valorPedido: number): number {
    return valorPedido * 0.05;
  }
}
