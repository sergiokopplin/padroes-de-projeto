import { Funcionario } from "./Funcionario";
import { EmailService } from "../services/Email";
import { Newsletter } from "../subjects/Newsletter";
import { Observer } from "../interfaces/Observer";

interface SutTypes {
  sut: Funcionario;
  emailStub: EmailService;
  newsletterStub: Newsletter;
}

let registerObserverSpy: jest.SpyInstance<void, [observer: Observer], any>;

const makeSut = (): SutTypes => {
  const emailStub = new EmailService();
  const newsletterStub = new Newsletter();

  registerObserverSpy = jest.spyOn(newsletterStub, "registerObserver");

  const sut = new Funcionario({
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
