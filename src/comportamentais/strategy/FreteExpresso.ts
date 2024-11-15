import { Frete } from "./Frete";

export class FreteExpresso implements Frete {
  calcula(valorPedido: number): number {
    return valorPedido * 0.1;
  }
}
