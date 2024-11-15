import { Cliente } from "./Cliente";
import { Fornecedor } from "./Fornecedor";
import { Funcionario } from "./Funcionario";
import { Newsletter } from "./Newsletter";
import { Parceiro } from "./Parceiro";

interface SutTypes {
  sut: Newsletter;
}

const makeSut = (): SutTypes => {
  const sut = new Newsletter();

  return {
    sut,
  };
};

describe("Newsletter", () => {
  test("deve iniciar com os valores corretos", () => {
    const { sut } = makeSut();

    new Funcionario("funcionario 1", "funcionario1@email.com", sut);
    const funcionario2 = new Funcionario(
      "funcionario 2",
      "funcionario2@email.com",
      sut
    );

    new Cliente("cliente", "cliente@email.com", sut);
    const parceiro = new Parceiro("parceiro", "parceiro@email.com", sut);
    new Fornecedor("fornecedor", "fornecedor@email.com", sut);

    sut.addMensagem("Primeira Mensagem");

    sut.removeObserver(funcionario2);

    sut.addMensagem("Segunda Mensagem");

    sut.removeObserver(parceiro);

    sut.addMensagem("Terceira Mensagem");

    sut.registerObserver(funcionario2);

    sut.addMensagem("Quarta Mensagem");

    sut.notifyObserver();

    expect(sut.addMensagem).toBeTruthy();
  });
});
