export interface Frete {
  calcula(valorPedido: number): number;
}

export class FreteComum implements Frete {
  calcula(valorPedido: number): number {
    return valorPedido * 0.05;
  }
}

export class FreteExpresso implements Frete {
  calcula(valorPedido: number): number {
    return valorPedido * 0.1;
  }
}
