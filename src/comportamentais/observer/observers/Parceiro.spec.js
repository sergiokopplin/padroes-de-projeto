"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Parceiro_1 = require("./Parceiro");
const Email_1 = require("../services/Email");
const Newsletter_1 = require("../subjects/Newsletter");
let registerObserverSpy;
const makeSut = () => {
    const emailStub = new Email_1.EmailService();
    const newsletterStub = new Newsletter_1.Newsletter();
    registerObserverSpy = jest.spyOn(newsletterStub, "registerObserver");
    const sut = new Parceiro_1.Parceiro({
        nome: "parceiro",
        email: "parceiro@email.com",
        subject: newsletterStub,
        emailService: emailStub,
    });
    return {
        sut,
        emailStub,
        newsletterStub,
    };
};
describe("Parceiro", () => {
    test("deve iniciar com os valores corretos", () => {
        const { sut } = makeSut();
        expect(sut.nome).toBe("parceiro");
        expect(sut.email).toBe("parceiro@email.com");
    });
    test("deve alterar o nome corretamente", () => {
        const { sut } = makeSut();
        expect(sut.nome).toBe("parceiro");
        sut.nome = "parceiro 2";
        expect(sut.nome).toBe("parceiro 2");
    });
    test("deve alterar o email corretamente", () => {
        const { sut } = makeSut();
        expect(sut.email).toBe("parceiro@email.com");
        sut.email = "parceiro2@email.com";
        expect(sut.email).toBe("parceiro2@email.com");
    });
    test("deve registrar no observador ao construir", () => {
        makeSut();
        expect(registerObserverSpy).toHaveBeenCalledTimes(1);
    });
});
