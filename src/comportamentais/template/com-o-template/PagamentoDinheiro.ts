import { Pagamento } from "./Pagamento";

export class PagamentoDinheiro extends Pagamento {
  public calculaDesconto(): number {
    return this.valor * 0.1;
  }
}
