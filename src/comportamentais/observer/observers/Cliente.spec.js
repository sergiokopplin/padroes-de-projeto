"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_1 = require("./Cliente");
const Email_1 = require("../services/Email");
const Newsletter_1 = require("../subjects/Newsletter");
let registerObserverSpy;
const makeSut = () => {
    const emailStub = new Email_1.EmailService();
    const newsletterStub = new Newsletter_1.Newsletter();
    registerObserverSpy = jest.spyOn(newsletterStub, "registerObserver");
    const sut = new Cliente_1.Cliente({
        nome: "Cliente",
        email: "cliente@email.com",
        subject: newsletterStub,
        emailService: emailStub,
    });
    return {
        sut,
        emailStub,
        newsletterStub,
    };
};
describe("Cliente", () => {
    test("deve iniciar com os valores corretos", () => {
        const { sut } = makeSut();
        expect(sut.nome).toBe("Cliente");
        expect(sut.email).toBe("cliente@email.com");
    });
    test("deve alterar o nome corretamente", () => {
        const { sut } = makeSut();
        expect(sut.nome).toBe("Cliente");
        sut.nome = "Cliente 2";
        expect(sut.nome).toBe("Cliente 2");
    });
    test("deve alterar o email corretamente", () => {
        const { sut } = makeSut();
        expect(sut.email).toBe("cliente@email.com");
        sut.email = "cliente2@email.com";
        expect(sut.email).toBe("cliente2@email.com");
    });
    test("deve registrar no observador ao construir", () => {
        makeSut();
        expect(registerObserverSpy).toHaveBeenCalledTimes(1);
    });
});
