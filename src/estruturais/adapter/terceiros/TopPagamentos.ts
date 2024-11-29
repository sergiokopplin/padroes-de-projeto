export class TopPagamentos {
  private _valor: number;
  private _parcelas: number;
  private _numeroCartao: string;
  private _cvv: string;

  public setValorTotal(value: number) {
    this._valor = value;
  }

  public setQuantidadesParcelas(value: number) {
    this._parcelas = value;
  }

  public setCartao(cartao: string, cvv: string) {
    this._numeroCartao = cartao;
    this._cvv = cvv;
  }

  public realizarPagamento(): boolean {
    console.log(
      "Pagamento Realizado via TopPagamentos",
      this._valor,
      this._parcelas,
      this._numeroCartao,
      this._cvv
    );

    return true;
  }
}
