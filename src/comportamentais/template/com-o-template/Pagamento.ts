import { Gateway } from "./Gateway";

export abstract class Pagamento {
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

  // Esse método é definido com um retorno padrão, para que uma das subclasses possam reutilizar, não sendo obrigatório a sua definição
  public calculaTaxa(): number {
    return 0;
  }

  // Nesse caso, calcular desconto é definido como um Hook
  public abstract calculaDesconto(): number;

  // Esse é o template Method
  // O que dá o nome a esse padrão
  public realizarCobranca(): boolean {
    const valorFinal =
      this._valor + this.calculaTaxa() - this.calculaDesconto();

    return this.gateway.cobrar(valorFinal);
  }
}
