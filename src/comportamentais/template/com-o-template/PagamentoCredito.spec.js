"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Gateway_1 = require("./Gateway");
const PagamentoCredito_1 = require("./PagamentoCredito");
const makeGateway = () => {
    return new Gateway_1.Gateway();
};
const makeSut = () => {
    const gatewayStub = makeGateway();
    const sut = new PagamentoCredito_1.PagamentoCredito(0, gatewayStub);
    return {
        sut,
        gatewayStub,
    };
};
describe("PagamentoCredito", () => {
    test("deve iniciar com os valores corretos", () => {
        const { sut } = makeSut();
        expect(sut.valor).toBe(0);
    });
    test("deve calcular taxa corretamente com 5%", () => {
        const { sut } = makeSut();
        sut.valor = 100;
        expect(sut.calculaTaxa()).toBe(5);
    });
    test("deve calcular desconto de 2% quando o valor é maior que 300 reais", () => {
        const { sut } = makeSut();
        sut.valor = 500;
        expect(sut.calculaDesconto()).toBe(10);
    });
    test("deve calcular desconto de 0% quando o valor é menor que 300 reais", () => {
        const { sut } = makeSut();
        sut.valor = 100;
        expect(sut.calculaDesconto()).toBe(0);
    });
    test("deve chamar o gateway com valor + taxa - desconto, quando for maior que 300 reais", () => {
        const { sut, gatewayStub } = makeSut();
        const cobrarSpy = jest.spyOn(gatewayStub, "cobrar");
        sut.valor = 500;
        expect(sut.realizarCobranca()).toBeDefined();
        expect(cobrarSpy).toHaveBeenCalledWith(515);
    });
    test("deve chamar o gateway com valor + taxa - desconto, quando for menor que 300 reais", () => {
        const { sut, gatewayStub } = makeSut();
        const cobrarSpy = jest.spyOn(gatewayStub, "cobrar");
        sut.valor = 250;
        expect(sut.realizarCobranca()).toBeDefined();
        expect(cobrarSpy).toHaveBeenCalledWith(262.5);
    });
});
