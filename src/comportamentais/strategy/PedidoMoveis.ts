import { Pedido } from "./Pedido";

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
