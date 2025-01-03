import { Gateway } from "./Gateway";

export class PagamentoDebito {
  private _valor: number;
  private gateway: Gateway;

  constructor(valor: number, gateway: Gateway) {
    this._valor = valor;
    this.gateway = gateway;
  }

  public get valor(): number {
    return this._valor;
  }

  public set valor(value: number) {
    this._valor = value;
  }

  public calculaTaxa(): number {
    return 4;
  }

  public calculaDesconto(): number {
    return this._valor * 0.05;
  }

  public realizarCobranca(): boolean {
    const valorFinal =
      this._valor + this.calculaTaxa() - this.calculaDesconto();

    return this.gateway.cobrar(valorFinal);
  }
}
