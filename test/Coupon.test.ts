import Coupon from "../src/Coupon";

test("Deve criar um cupom de desconto válido", () => {
  const coupon = new Coupon("VALE20", 20);
  const today = new Date("2023-01-12");
  const isValid = coupon.isValid(today);
  expect(isValid).toBeTruthy();
});

test("Deve criar um cupom de desconto expirado", () => {
  const coupon = new Coupon("VALE20", 20, new Date("2023-01-10"));
  const today = new Date("2023-01-12");
  const isExpired = coupon.isExpired(today);
  expect(isExpired).toBeTruthy();
});

test("Deve criar um cupom de desconto válido e calcular o desconto", () => {
  const coupon = new Coupon("VALE20", 20);
  const discount = coupon.calculateDiscount(1000);
  expect(discount).toBe(200);
});
