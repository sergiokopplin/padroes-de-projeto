import { Cliente } from "./Cliente";
import { EmailService } from "../services/Email";
import { Newsletter } from "../subjects/Newsletter";
import { Observer } from "../interfaces/Observer";

interface SutTypes {
  sut: Cliente;
  emailStub: EmailService;
  newsletterStub: Newsletter;
}

let registerObserverSpy: jest.SpyInstance<void, [observer: Observer], any>;

const makeSut = (): SutTypes => {
  const emailStub = new EmailService();
  const newsletterStub = new Newsletter();

  registerObserverSpy = jest.spyOn(newsletterStub, "registerObserver");

  const sut = new Cliente({
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
