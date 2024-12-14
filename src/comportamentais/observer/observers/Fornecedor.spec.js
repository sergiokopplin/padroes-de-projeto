"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Fornecedor_1 = require("./Fornecedor");
const Email_1 = require("../services/Email");
const Newsletter_1 = require("../subjects/Newsletter");
let registerObserverSpy;
const makeSut = () => {
    const emailStub = new Email_1.EmailService();
    const newsletterStub = new Newsletter_1.Newsletter();
    registerObserverSpy = jest.spyOn(newsletterStub, "registerObserver");
    const sut = new Fornecedor_1.Fornecedor({
        nome: "fornecedor",
        email: "fornecedor@email.com",
        subject: newsletterStub,
        emailService: emailStub,
    });
    return {
        sut,
        emailStub,
        newsletterStub,
    };
};
describe("Fornecedor", () => {
    test("deve iniciar com os valores corretos", () => {
        const { sut } = makeSut();
        expect(sut.nome).toBe("fornecedor");
        expect(sut.email).toBe("fornecedor@email.com");
    });
    test("deve alterar o nome corretamente", () => {
        const { sut } = makeSut();
        expect(sut.nome).toBe("fornecedor");
        sut.nome = "fornecedor 2";
        expect(sut.nome).toBe("fornecedor 2");
    });
    test("deve alterar o email corretamente", () => {
        const { sut } = makeSut();
        expect(sut.email).toBe("fornecedor@email.com");
        sut.email = "fornecedor2@email.com";
        expect(sut.email).toBe("fornecedor2@email.com");
    });
    test("deve registrar no observador ao construir", () => {
        makeSut();
        expect(registerObserverSpy).toHaveBeenCalledTimes(1);
    });
});
