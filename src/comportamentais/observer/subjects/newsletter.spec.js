"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_1 = require("../observers/Cliente");
const Fornecedor_1 = require("../observers/Fornecedor");
const Funcionario_1 = require("../observers/Funcionario");
const Newsletter_1 = require("./Newsletter");
const Parceiro_1 = require("../observers/Parceiro");
const Email_1 = require("../services/Email");
const makeSut = () => {
    const logSpy = jest.spyOn(console, "log").mockImplementation(() => { });
    const emailStub = new Email_1.EmailService();
    const sut = new Newsletter_1.Newsletter();
    return {
        sut,
        emailStub,
        logSpy,
    };
};
describe("Newsletter Integration Test", () => {
    test("deve funcionar corretamente em todos os casos de uso", () => {
        const { sut, emailStub, logSpy } = makeSut();
        new Funcionario_1.Funcionario({
            nome: "funcionario 1",
            email: "funcionario 1@email.com",
            subject: sut,
            emailService: emailStub,
        });
        const funcionario2 = new Funcionario_1.Funcionario({
            nome: "funcionario 2",
            email: "funcionario 2@email.com",
            subject: sut,
            emailService: emailStub,
        });
        new Cliente_1.Cliente({
            nome: "cliente 1",
            email: "cliente 1@email.com",
            subject: sut,
            emailService: emailStub,
        });
        const parceiro = new Parceiro_1.Parceiro({
            nome: "parceiro 1",
            email: "parceiro 1@email.com",
            subject: sut,
            emailService: emailStub,
        });
        new Fornecedor_1.Fornecedor({
            nome: "fornecedor 1",
            email: "fornecedor 1@email.com",
            subject: sut,
            emailService: emailStub,
        });
        sut.addMensagem("Primeira Mensagem");
        expect(logSpy).toHaveBeenCalledTimes(5);
        sut.removeObserver(funcionario2);
        sut.addMensagem("Segunda Mensagem");
        expect(logSpy).toHaveBeenCalledTimes(9);
        sut.removeObserver(parceiro);
        sut.addMensagem("Terceira Mensagem");
        expect(logSpy).toHaveBeenCalledTimes(12);
        sut.registerObserver(funcionario2);
        sut.addMensagem("Quarta Mensagem");
        expect(logSpy).toHaveBeenCalledTimes(16);
        sut.notifyObserver();
        expect(logSpy).toHaveBeenCalledTimes(20);
    });
});
