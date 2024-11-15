import { Frete } from "./Frete";

export abstract class Pedido {
  private _valor: number = 0;
  private _frete!: Frete;

  public get valor(): number {
    return this._valor;
  }

  public set valor(value: number) {
    this._valor = value;
  }

  public setTipoFrete(frete: Frete): void {
    this._frete = frete;
  }

  public calculaFrete(): number {
    return this._frete.calcula(this._valor);
  }
}

export class PedidoEletronico extends Pedido {
  private _nomeSetor: string = "";

  constructor() {
    super();
    this._nomeSetor = "Eletronicos";
  }

  public get nomeSetor(): string {
    return this._nomeSetor;
  }

  public set nomeSetor(value: string) {
    this._nomeSetor = value;
  }
}

export class PedidoMoveis extends Pedido {
  private _nomeSetor: string = "";

  constructor() {
    super();
    this._nomeSetor = "Moveis";
  }

  public get nomeSetor(): string {
    return this._nomeSetor;
  }

  public set nomeSetor(value: string) {
    this._nomeSetor = value;
  }
}
