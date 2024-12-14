"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_1 = require("../observers/Cliente");
const Newsletter_1 = require("../subjects/Newsletter");
const Email_1 = require("./Email");
const makeSut = () => {
    const logSpy = jest.spyOn(console, "log").mockImplementation(() => { });
    const email = new Email_1.EmailService();
    const newsletter = new Newsletter_1.Newsletter();
    const observerStub = new Cliente_1.Cliente({
        nome: "Cliente",
        email: "cliente@email.com",
        subject: newsletter,
        emailService: email,
    });
    const sut = new Email_1.EmailService();
    return {
        sut,
        observerStub,
        logSpy,
    };
};
describe("EmailService", () => {
    test("deve printas as mensagens corretamente", () => {
        const { sut, observerStub, logSpy } = makeSut();
        sut.enviarEmail(observerStub, "Mensagem");
        expect(logSpy).toHaveBeenCalledWith("Enviado para Cliente - cliente@email.com}, Mensagem: Mensagem");
    });
});
