export class PagFacil {
  private _valor: number;
  private _parcelas: number;
  private _numeroCartao: string;
  private _cvv: string;

  public set valor(value: number) {
    this._valor = value;
  }

  public set parcelas(value: number) {
    this._parcelas = value;
  }

  public set numeroCartao(value: string) {
    this._numeroCartao = value;
  }

  public set cvv(value: string) {
    this._cvv = value;
  }

  public validarCartao(): boolean {
    return (
      this._numeroCartao !== "" && this._cvv !== "" && this._cvv.length === 3
    );
  }

  public realizarPagamento(): boolean {
    console.log(
      "Pagamento Realizado via PagFacil",
      this._valor,
      this._parcelas
    );
    return true;
  }
}
