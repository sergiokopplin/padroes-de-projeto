import { PagFacil } from "./terceiros/PagFacil";

export class Cobranca {
  private _gateway: PagFacil;

  constructor(gateway: PagFacil) {
    this.gateway = gateway;
  }

  public get gateway(): PagFacil {
    return this._gateway;
  }

  public set gateway(value: PagFacil) {
    this._gateway = value;
  }

  public setValor(valor: number): void {
    this.gateway.valor = valor;
  }

  public setParcelas(valor: number): void {
    this.gateway.parcelas = valor;
  }

  public setNumeroCartao(valor: string): void {
    this.gateway.numeroCartao = valor;
  }

  public setCvv(valor: string): void {
    this.gateway.cvv = valor;
  }

  public realizarPagamento(): boolean {
    if (this._gateway.validarCartao()) {
      return this._gateway.realizarPagamento();
    }

    return false;
  }
}
