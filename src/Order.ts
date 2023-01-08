import Coupon from "./Coupon"
import ValidateCPF from "./Cpf"
import Item from "./Item"
import OrderItem from "./OrderItem"

export default class Order {
  cpf: ValidateCPF
  orderItems: OrderItem[]
  coupon: Coupon | undefined

  constructor(cpf: string) {
    this.cpf = new ValidateCPF(cpf)
    this.orderItems = []
  }
  addItem(item: Item, quantity: number) {
    this.orderItems.push(new OrderItem(item.idItem, item.price, quantity))
  }
  addCoupon(coupon: Coupon) {
    this.coupon = coupon
  }
  getTotal() {
    let total = 0
    for (const orderItem of this.orderItems) {
      total += orderItem.getTotal()
    }
    if (this.coupon) {
      total -= (total * this.coupon.porcentage) / 100
    }
    return total
  }
}