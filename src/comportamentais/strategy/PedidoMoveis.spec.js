"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FreteExpresso_1 = require("./FreteExpresso");
const PedidoMoveis_1 = require("./PedidoMoveis");
const freteExpresso = new FreteExpresso_1.FreteExpresso();
const makeSut = () => {
    const sut = new PedidoMoveis_1.PedidoMoveis();
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
