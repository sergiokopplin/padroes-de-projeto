"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PagFacilAdapter_1 = require("./PagFacilAdapter");
const TopPagamentos_1 = require("./terceiros/TopPagamentos");
const TopPagamentosAdapter_1 = require("./TopPagamentosAdapter");
const makePagFacilSut = () => {
    const logSpy = jest.spyOn(console, "log").mockImplementation(() => { });
    const sut = new PagFacilAdapter_1.PagFacilAdapter();
    return {
        sut,
        logSpy,
    };
};
const makeTopPagamentosSut = () => {
    const logSpy = jest.spyOn(console, "log").mockImplementation(() => { });
    const topPagamentos = new TopPagamentos_1.TopPagamentos();
    const sut = new TopPagamentosAdapter_1.TopPagamentosAdapter(topPagamentos);
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
        expect(logSpy).toHaveBeenCalledWith("Pagamento Realizado via PagFacil", 100, 10);
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
        expect(logSpy).toHaveBeenCalledWith("Pagamento Realizado via TopPagamentos", 100, 10, "5432", "123");
    });
});
