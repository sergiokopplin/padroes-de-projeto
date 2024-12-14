"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FreteComum_1 = require("./FreteComum");
const PedidoEletronico_1 = require("./PedidoEletronico");
const freteComum = new FreteComum_1.FreteComum();
const makeSut = () => {
    const sut = new PedidoEletronico_1.PedidoEletronico();
    sut.setTipoFrete(freteComum);
    return {
        sut,
    };
};
describe("PedidoEletronico", () => {
    test("deve iniciar com os valores corretos", () => {
        const { sut } = makeSut();
        expect(sut.valor).toBe(0);
        expect(sut.nomeSetor).toBe("Eletronicos");
    });
    test("setters e getters devem funcionar corretamente", () => {
        const { sut } = makeSut();
        sut.valor = 100;
        expect(sut.valor).toBe(100);
        sut.nomeSetor = "Eletronicos 2";
        expect(sut.nomeSetor).toBe("Eletronicos 2");
    });
    test("calcular frete com 5% do valor", () => {
        const { sut } = makeSut();
        sut.valor = 200;
        expect(sut.calculaFrete()).toBe(10);
    });
});
