import { Observer } from "../interfaces/Observer";
import { Cliente } from "../observers/Cliente";
import { Newsletter } from "../subjects/Newsletter";
import { EmailService } from "./Email";

interface SutTypes {
  sut: EmailService;
  observerStub: Observer;
  logSpy: any;
}

const makeSut = (): SutTypes => {
  const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});

  const email = new EmailService();
  const newsletter = new Newsletter();
  const observerStub = new Cliente({
    nome: "Cliente",
    email: "cliente@email.com",
    subject: newsletter,
    emailService: email,
  });

  const sut = new EmailService();

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

    expect(logSpy).toHaveBeenCalledWith(
      "Enviado para Cliente - cliente@email.com}, Mensagem: Mensagem"
    );
  });
});
