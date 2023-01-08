import OrderItem from "../src/OrderItem"

test("Deve criar item do pedido", () => {
  const orderItem = new OrderItem(1, 1000, 10)
  expect(orderItem.getTotal()).toBe(10000)
})