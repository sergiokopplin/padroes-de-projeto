// O que é?
// O padrão de projetos Strategy define uma família de algoritmos, encapsula cada um deles e os torna intercambiáveis. O Strategy permite que o algoritmo varie independentemente dos clientes que o utilizam

// Quando Utilizar?
// - Quando muitas classes diferentes fazem a mesma coisa de formas diferentes.
// - Quando se necessita de variantes de algoritmo.
// - Quando é necessário evitar a exposição de dados ou algoritmos sensíveis
// - Remoção de operadores condicionais que determinam o comportamento do algoritmo com base em objetos diferentes

// Consequências
// - Criação de família de Algoritmos
// - O encapsulamento dos algoritmos nas classes Strategy
// - Flexibilidade na escolha de qual estratégia utilizar
// - Clientes devem conhecer as strategies
// - Custo entre a comunicação Strategy e Context
// - Aumento do número de classes na aplicação

interface Frete {
  calcula(valorPedido: number): number;
}

export class FreteComum implements Frete {
  calcula(valorPedido: number): number {
    return valorPedido * 0.05;
  }
}

export class FreteExpresso implements Frete {
  calcula(valorPedido: number): number {
    return valorPedido * 0.1;
  }
}

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
