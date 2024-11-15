import { Pagamento } from "./Pagamento";

export class PagamentoDebito extends Pagamento {
  public calculaTaxa(): number {
    return 4;
  }

  public calculaDesconto(): number {
    return this.valor * 0.05;
  }
}
