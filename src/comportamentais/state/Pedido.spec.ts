import { Pedido } from "./Pedido";

interface SutTypes {
  sut: Pedido;
  logSpy: any;
}

const makeSut = (): SutTypes => {
  const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});

  const sut = new Pedido();

  return {
    sut,
    logSpy,
  };
};

describe("Pedido", () => {
  it("aguardando pagamento -> pago -> enviado", () => {
    const { sut } = makeSut();

    sut.realizarPagamento();
    sut.despacharPedido();

    expect(() => sut).not.toThrow();
  });

  it("aguardando pagamento -> pago -> cancelado", () => {
    const { sut } = makeSut();

    sut.realizarPagamento();
    sut.cancelarPedido();

    expect(() => sut).not.toThrow();
  });

  it("aguardando pagamento -> cancelado", () => {
    const { sut } = makeSut();

    sut.cancelarPedido();

    expect(() => sut).not.toThrow();
  });

  it("aguardando pagamento -> despachado", () => {
    const { sut, logSpy } = makeSut();

    sut.despacharPedido();

    expect(logSpy).toHaveBeenCalledWith(
      new Error("Operação não suportada. O pedido ainda não foi pago.")
    );
  });

  it("aguardando pagamento -> cancelado -> cancelado", () => {
    const { sut, logSpy } = makeSut();

    sut.cancelarPedido();
    sut.cancelarPedido();

    expect(logSpy).toHaveBeenCalledWith(
      new Error("Operação não suportada. O pedido já foi cancelado.")
    );
  });
});
