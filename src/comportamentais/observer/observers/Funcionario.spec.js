"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Funcionario_1 = require("./Funcionario");
const Email_1 = require("../services/Email");
const Newsletter_1 = require("../subjects/Newsletter");
let registerObserverSpy;
const makeSut = () => {
    const emailStub = new Email_1.EmailService();
    const newsletterStub = new Newsletter_1.Newsletter();
    registerObserverSpy = jest.spyOn(newsletterStub, "registerObserver");
    const sut = new Funcionario_1.Funcionario({
        nome: "funcionario",
        email: "funcionario@email.com",
        subject: newsletterStub,
        emailService: emailStub,
    });
    return {
        sut,
        emailStub,
        newsletterStub,
    };
};
describe("Funcionario", () => {
    test("deve iniciar com os valores corretos", () => {
        const { sut } = makeSut();
        expect(sut.nome).toBe("funcionario");
        expect(sut.email).toBe("funcionario@email.com");
    });
    test("deve alterar o nome corretamente", () => {
        const { sut } = makeSut();
        expect(sut.nome).toBe("funcionario");
        sut.nome = "funcionario 2";
        expect(sut.nome).toBe("funcionario 2");
    });
    test("deve alterar o email corretamente", () => {
        const { sut } = makeSut();
        expect(sut.email).toBe("funcionario@email.com");
        sut.email = "funcionario2@email.com";
        expect(sut.email).toBe("funcionario2@email.com");
    });
    test("deve registrar no observador ao construir", () => {
        makeSut();
        expect(registerObserverSpy).toHaveBeenCalledTimes(1);
    });
});
