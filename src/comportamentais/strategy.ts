export class Order {
  private _value: number = 0;

  public get value(): number {
    return this._value;
  }

  public set value(value: number) {
    this._value = value;
  }

  public calculateCommonShipping(): number {
    return this._value * 0.05;
  }

  public calculateSpecialShipping(): number {
    return this._value * 0.1;
  }
}
