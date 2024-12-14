import { AcrescimoDecorator } from "./AcrescimoDecorator";

export class BordaRequeijao extends AcrescimoDecorator {
  public getPreco(): number {
    return this.pizza.getPreco() + 8.5;
  }
}
