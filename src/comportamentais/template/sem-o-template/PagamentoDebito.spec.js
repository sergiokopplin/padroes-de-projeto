"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Gateway_1 = require("./Gateway");
const PagamentoDebito_1 = require("./PagamentoDebito");
const makeGateway = () => {
    return new Gateway_1.Gateway();
};
const makeSut = () => {
    const gatewayStub = makeGateway();
    const sut = new PagamentoDebito_1.PagamentoDebito(0, gatewayStub);
    return {
        sut,
        gatewayStub,
    };
};
describe("PagamentoDebito", () => {
    test("deve iniciar com os valores corretos", () => {
        const { sut } = makeSut();
        expect(sut.valor).toBe(0);
    });
    test("deve calcular taxa corretamente com R$ 4", () => {
        const { sut } = makeSut();
        sut.valor = 100;
        expect(sut.calculaTaxa()).toBe(4);
    });
    test("deve calcular desconto de 5% para qualquer valor", () => {
        const { sut } = makeSut();
        sut.valor = 500;
        expect(sut.calculaDesconto()).toBe(25);
    });
    test("deve chamar o gateway com valor + taxa - desconto", () => {
        const { sut, gatewayStub } = makeSut();
        const cobrarSpy = jest.spyOn(gatewayStub, "cobrar");
        sut.valor = 500;
        expect(sut.realizarCobranca()).toBeDefined();
        expect(cobrarSpy).toHaveBeenCalledWith(479);
    });
});
