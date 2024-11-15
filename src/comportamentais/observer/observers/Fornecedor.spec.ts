import { Fornecedor } from "./Fornecedor";
import { EmailService } from "../services/Email";
import { Newsletter } from "../subjects/Newsletter";
import { Observer } from "../interfaces/Observer";

interface SutTypes {
  sut: Fornecedor;
  emailStub: EmailService;
  newsletterStub: Newsletter;
}

let registerObserverSpy: jest.SpyInstance<void, [observer: Observer], any>;

const makeSut = (): SutTypes => {
  const emailStub = new EmailService();
  const newsletterStub = new Newsletter();

  registerObserverSpy = jest.spyOn(newsletterStub, "registerObserver");

  const sut = new Fornecedor({
    nome: "fornecedor",
    email: "fornecedor@email.com",
    subject: newsletterStub,
    emailService: emailStub,
  });

  return {
    sut,
    emailStub,
    newsletterStub,
  };
};

describe("Fornecedor", () => {
  test("deve iniciar com os valores corretos", () => {
    const { sut } = makeSut();

    expect(sut.nome).toBe("fornecedor");
    expect(sut.email).toBe("fornecedor@email.com");
  });

  test("deve alterar o nome corretamente", () => {
    const { sut } = makeSut();

    expect(sut.nome).toBe("fornecedor");
    sut.nome = "fornecedor 2";
    expect(sut.nome).toBe("fornecedor 2");
  });

  test("deve alterar o email corretamente", () => {
    const { sut } = makeSut();

    expect(sut.email).toBe("fornecedor@email.com");
    sut.email = "fornecedor2@email.com";
    expect(sut.email).toBe("fornecedor2@email.com");
  });

  test("deve registrar no observador ao construir", () => {
    makeSut();
    expect(registerObserverSpy).toHaveBeenCalledTimes(1);
  });
});
