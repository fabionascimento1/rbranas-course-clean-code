import Coupon from "../src/Coupon"
import Item from "../src/Item"
import Order from "../src/Order"

test('Deve criar um pedido vazio com cpf válido', () => {
  const cpf = "839.435.452-10"
  const order = new Order(cpf)
  const total = order.getTotal()
  expect(total).toBe(0)
})

test('Deve criar um pedido vazio com cpf inválido', () => {
  const cpf = "111.111.111-11"
  expect(() => new Order(cpf)).toThrowError(new Error('Invalid cpf'))
})

test('Deve criar um pedido com 3 itens', () => {
  const cpf = "839.435.452-10"
  const order = new Order(cpf)
  order.addItem(new Item(1, "Musica", "CD", 30), 3)
  order.addItem(new Item(2, "Vídeo", "DVD", 50), 1)
  order.addItem(new Item(3, "Musica", "VSH", 10), 2)
  const total = order.getTotal()
  expect(total).toBe(160)
})


test('Deve criar um pedido com 3 itens com cupon de desconntos', () => {
  const cpf = "839.435.452-10"
  const order = new Order(cpf)
  order.addItem(new Item(1, "Musica", "CD", 30), 3)
  order.addItem(new Item(2, "Vídeo", "DVD", 50), 1)
  order.addItem(new Item(3, "Musica", "VSH", 10), 2)
  order.addCoupon(new Coupon("VALE20", 20))
  const total = order.getTotal()
  expect(total).toBe(128)
})