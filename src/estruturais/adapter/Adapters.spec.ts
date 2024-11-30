import { PagFacilAdapter } from "./PagFacilAdapter";
import { TopPagamentos } from "./terceiros/TopPagamentos";
import { TopPagamentosAdapter } from "./TopPagamentosAdapter";

interface PagFacilSutTypes {
  sut: PagFacilAdapter;
  logSpy: any;
}

interface TopPagamentosSutTypes {
  sut: TopPagamentosAdapter;
  logSpy: any;
}

const makePagFacilSut = (): PagFacilSutTypes => {
  const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});

  const sut = new PagFacilAdapter();

  return {
    sut,
    logSpy,
  };
};

const makeTopPagamentosSut = (): TopPagamentosSutTypes => {
  const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  const topPagamentos = new TopPagamentos();

  const sut = new TopPagamentosAdapter(topPagamentos);

  return {
    sut,
    logSpy,
  };
};

describe("PagFacilAdapter", () => {
  test("deve printas as mensagens corretamente", () => {
    const { sut, logSpy } = makePagFacilSut();

    sut.setValor(100);
    sut.setNumeroCartao("5432");
    sut.setCvv("123");
    sut.setParcelas(10);

    sut.validarCartao();
    sut.realizarPagamento();

    expect(logSpy).toHaveBeenCalledWith(
      "Pagamento Realizado via PagFacil",
      100,
      10
    );
  });
});

describe("TopPagamentosSutAdapter", () => {
  test("deve printas as mensagens corretamente", () => {
    const { sut, logSpy } = makeTopPagamentosSut();

    sut.setValor(100);
    sut.setCvv("123");
    sut.setNumeroCartao("5432");
    sut.setParcelas(10);

    sut.validarCartao();
    sut.realizarPagamento();

    expect(logSpy).toHaveBeenCalledWith(
      "Pagamento Realizado via TopPagamentos",
      100,
      10,
      "5432",
      "123"
    );
  });
});
