import Coupon from "../src/Coupon";

test("Deve criar um cupom de desconto válido", () => {
  const coupon = new Coupon("VALE20", 20);
  const isValid = coupon.isValid();
  expect(isValid).toBeTruthy();
});

test("Deve criar um cupom de desconto expirado", () => {
  const coupon = new Coupon("VALE20", 20, new Date("2023-01-10"));
  const isExpired = coupon.isExpired();
  expect(isExpired).toBeTruthy();
});
