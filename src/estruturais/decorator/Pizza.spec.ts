import { PizzaQueijo } from "./PizzaQueijo";
import { BordaRequeijao } from "./BordaRequeijao";

interface SutTypesPizzaQueijo {
  sut: PizzaQueijo;
}

const makeSutPizzaQueijo = (): SutTypesPizzaQueijo => {
  const sut = new PizzaQueijo();

  return {
    sut,
  };
};

interface SutTypesBordaRequeijao {
  sut: BordaRequeijao;
}

const makeSutBordaRequeijao = (): SutTypesBordaRequeijao => {
  const sut = new BordaRequeijao(makeSutPizzaQueijo().sut);

  return {
    sut,
  };
};

describe("PizzaQueijo", () => {
  test("deve retornar preço corretamente", () => {
    const { sut } = makeSutPizzaQueijo();

    expect(sut.getPreco()).toBe(22);
  });
});

describe("BordaRequeijao", () => {
  test("deve retornar preço corretamente", () => {
    const { sut } = makeSutBordaRequeijao();

    expect(sut.getPreco()).toBe(30.5);
  });
});
