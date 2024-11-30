import { Gateway } from "../Gateway";

export class PagFacil implements Gateway {
  private valor: number;
  private parcelas: number;
  private numeroCartao: string;
  private cvv: string;

  public setValor(value: number) {
    this.valor = value;
  }

  public setParcelas(value: number) {
    this.parcelas = value;
  }

  public setNumeroCartao(value: string) {
    this.numeroCartao = value;
  }

  public setCvv(value: string) {
    this.cvv = value;
  }

  public validarCartao(): boolean {
    return this.numeroCartao !== "" && this.cvv !== "" && this.cvv.length === 3;
  }

  public realizarPagamento(): boolean {
    console.log("Pagamento Realizado via PagFacil", this.valor, this.parcelas);
    return true;
  }
}
