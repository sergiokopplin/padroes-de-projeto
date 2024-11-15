import { Cliente } from "../observers/Cliente";
import { Fornecedor } from "../observers/Fornecedor";
import { Funcionario } from "../observers/Funcionario";
import { Newsletter } from "./Newsletter";
import { Parceiro } from "../observers/Parceiro";
import { EmailService } from "../services/Email";
import { ObserverService } from "../interfaces/ObserverService";

interface SutTypes {
  sut: Newsletter;
  emailStub: ObserverService;
  logSpy: any;
}

const makeSut = (): SutTypes => {
  const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});

  const emailStub = new EmailService();
  const sut = new Newsletter();

  return {
    sut,
    emailStub,
    logSpy,
  };
};

describe("Newsletter Integration Test", () => {
  test("deve funcionar corretamente em todos os casos de uso", () => {
    const { sut, emailStub, logSpy } = makeSut();

    new Funcionario({
      nome: "funcionario 1",
      email: "funcionario 1@email.com",
      subject: sut,
      emailService: emailStub,
    });
    const funcionario2 = new Funcionario({
      nome: "funcionario 2",
      email: "funcionario 2@email.com",
      subject: sut,
      emailService: emailStub,
    });

    new Cliente({
      nome: "cliente 1",
      email: "cliente 1@email.com",
      subject: sut,
      emailService: emailStub,
    });
    const parceiro = new Parceiro({
      nome: "parceiro 1",
      email: "parceiro 1@email.com",
      subject: sut,
      emailService: emailStub,
    });
    new Fornecedor({
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
