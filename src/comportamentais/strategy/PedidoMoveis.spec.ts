import { FreteExpresso } from "./FreteExpresso";
import { PedidoMoveis } from "./PedidoMoveis";

const freteExpresso = new FreteExpresso();

interface SutTypes {
  sut: PedidoMoveis;
}

const makeSut = (): SutTypes => {
  const sut = new PedidoMoveis();
  sut.setTipoFrete(freteExpresso);

  return {
    sut,
  };
};

describe("PedidoMoveis", () => {
  test("deve iniciar com os valores corretos", () => {
    const { sut } = makeSut();

    expect(sut.valor).toBe(0);
    expect(sut.nomeSetor).toBe("Moveis");
  });

  test("setters e getters devem funcionar corretamente", () => {
    const { sut } = makeSut();

    sut.valor = 100;
    expect(sut.valor).toBe(100);

    sut.nomeSetor = "Moveis 2";
    expect(sut.nomeSetor).toBe("Moveis 2");
  });

  test("calcular frete com 10% do valor", () => {
    const { sut } = makeSut();

    sut.valor = 200;
    expect(sut.calculaFrete()).toBe(20);
  });
});
