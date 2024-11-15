import { Parceiro } from "./Parceiro";
import { EmailService } from "../services/Email";
import { Newsletter } from "../subjects/Newsletter";
import { Observer } from "../interfaces/Observer";

interface SutTypes {
  sut: Parceiro;
  emailStub: EmailService;
  newsletterStub: Newsletter;
}

let registerObserverSpy: jest.SpyInstance<void, [observer: Observer], any>;

const makeSut = (): SutTypes => {
  const emailStub = new EmailService();
  const newsletterStub = new Newsletter();

  registerObserverSpy = jest.spyOn(newsletterStub, "registerObserver");

  const sut = new Parceiro({
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
