import { Gateway } from "./Gateway";
import { TopPagamentos } from "./terceiros/TopPagamentos";

export class TopPagamentosAdapter implements Gateway {
  private topPagamentos: TopPagamentos;
  private cvv: string;

  constructor(topPagamentos: TopPagamentos) {
    this.topPagamentos = topPagamentos;
  }

  setValor(value: number): void {
    this.topPagamentos.setValorTotal(value);
  }

  setParcelas(value: number): void {
    this.topPagamentos.setQuantidadesParcelas(value);
  }

  setNumeroCartao(value: string): void {
    this.topPagamentos.setCartao(value, this.cvv);
  }

  setCvv(value: string): void {
    this.cvv = value;
  }

  validarCartao(): boolean {
    return true;
  }

  realizarPagamento(): boolean {
    return this.topPagamentos.realizarPagamento();
  }
}
