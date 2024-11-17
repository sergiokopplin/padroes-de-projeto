import { Pedido } from "./Pedido";

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
