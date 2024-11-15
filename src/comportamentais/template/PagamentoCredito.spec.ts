import { PagamentoCredito } from "./PagamentoCredito";

interface SutTypes {
  sut: PagamentoCredito;
}

const makeSut = (): SutTypes => {
  const sut = new PagamentoCredito();

  return {
    sut,
  };
};

describe("todo", () => {
  test("todo", () => {
    expect(true).toBe(true);
  });
});
