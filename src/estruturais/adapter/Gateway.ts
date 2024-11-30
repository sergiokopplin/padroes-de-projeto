export interface Gateway {
  setValor(value: number): void;
  setParcelas(value: number): void;
  setNumeroCartao(value: string): void;
  setCvv(value: string): void;
  validarCartao(): boolean;
  realizarPagamento(): boolean;
}
