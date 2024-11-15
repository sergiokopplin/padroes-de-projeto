import { FreteComum, FreteExpresso } from "./Frete";
import { PedidoEletronico, PedidoMoveis } from "./Pedido";

const freteComum = new FreteComum();
const freteExpresso = new FreteExpresso();

describe("PedidoEletronico", () => {
  let pedido: PedidoEletronico;

  beforeEach(() => {
    pedido = new PedidoEletronico();
    pedido.setTipoFrete(freteComum);
  });

  test("deve iniciar com os valores corretos", () => {
    expect(pedido.valor).toBe(0);
    expect(pedido.nomeSetor).toBe("Eletronicos");
  });

  test("setters e getters devem funcionar corretamente", () => {
    pedido.valor = 100;
    expect(pedido.valor).toBe(100);

    pedido.nomeSetor = "Eletronicos 2";
    expect(pedido.nomeSetor).toBe("Eletronicos 2");
  });

  test("calcular frete com 5% do valor", () => {
    pedido.valor = 200;
    expect(pedido.calculaFrete()).toBe(10);
  });
});

describe("PedidoMoveis", () => {
  let pedido: PedidoMoveis;

  beforeEach(() => {
    pedido = new PedidoMoveis();
    pedido.setTipoFrete(freteExpresso);
  });

  test("deve iniciar com os valores corretos", () => {
    expect(pedido.valor).toBe(0);
    expect(pedido.nomeSetor).toBe("Moveis");
  });

  test("setters e getters devem funcionar corretamente", () => {
    pedido.valor = 100;
    expect(pedido.valor).toBe(100);

    pedido.nomeSetor = "Moveis 2";
    expect(pedido.nomeSetor).toBe("Moveis 2");
  });

  test("calcular frete com 5% do valor", () => {
    pedido.valor = 200;
    expect(pedido.calculaFrete()).toBe(20);
  });
});
