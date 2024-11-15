import { Gateway } from "./Gateway";
import { PagamentoDinheiro } from "./PagamentoDinheiro";

const makeGateway = (): Gateway => {
  return new Gateway();
};

interface SutTypes {
  sut: PagamentoDinheiro;
  gatewayStub: Gateway;
}

const makeSut = (): SutTypes => {
  const gatewayStub = makeGateway();
  const sut = new PagamentoDinheiro(0, gatewayStub);

  return {
    sut,
    gatewayStub,
  };
};

describe("PagamentoDinheiro", () => {
  test("deve iniciar com os valores corretos", () => {
    const { sut } = makeSut();

    expect(sut.valor).toBe(0);
  });

  test("deve calcular taxa como zero", () => {
    const { sut } = makeSut();

    sut.valor = 100;
    expect(sut.calculaTaxa()).toBe(0);
  });

  test("deve calcular desconto de 10% para qualquer valor", () => {
    const { sut } = makeSut();

    sut.valor = 500;
    expect(sut.calculaDesconto()).toBe(50);
  });

  test("deve chamar o gateway com valor + taxa - desconto", () => {
    const { sut, gatewayStub } = makeSut();
    const cobrarSpy = jest.spyOn(gatewayStub, "cobrar");

    sut.valor = 500;
    expect(sut.realizarCobranca()).toBeDefined();
    expect(cobrarSpy).toHaveBeenCalledWith(450);
  });
});
