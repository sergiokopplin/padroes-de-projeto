import { Order } from "./strategy";

describe("Order class", () => {
  let order: Order;

  beforeEach(() => {
    order = new Order();
  });

  test("should initialize value to 0", () => {
    expect(order.value).toBe(0);
  });

  test("should set and get value correctly", () => {
    order.value = 100;
    expect(order.value).toBe(100);
  });

  test("should calculate common shipping as 5% of value", () => {
    order.value = 200;
    expect(order.calculateCommonShipping()).toBe(10);
  });

  test("should calculate special shipping as 10% of value", () => {
    order.value = 200;
    expect(order.calculateSpecialShipping()).toBe(20);
  });
});
