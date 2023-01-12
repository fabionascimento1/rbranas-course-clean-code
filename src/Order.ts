import Coupon from "./Coupon";
import ValidateCPF from "./Cpf";
import FreightCalculator from "./FreightCalculator";
import Item from "./Item";
import OrderItem from "./OrderItem";

export default class Order {
  cpf: ValidateCPF;
  private orderItems: OrderItem[];
  coupon: Coupon | undefined;
  private freight: number;

  constructor(cpf: string, readonly date: Date = new Date()) {
    this.cpf = new ValidateCPF(cpf);
    this.orderItems = [];
    this.freight = 0;
  }
  addItem(item: Item, quantity: number) {
    this.freight += FreightCalculator.calculate(item) * quantity;
    this.orderItems.push(new OrderItem(item.idItem, item.price, quantity));
  }
  addCoupon(coupon: Coupon) {
    if (coupon.isValid(this.date)) {
      this.coupon = coupon;
    }
  }
  getFreight() {
    return this.freight;
  }
  getTotal() {
    let total = 0;
    for (const orderItem of this.orderItems) {
      total += orderItem.getTotal();
    }
    if (this.coupon) {
      total -= this.coupon.calculateDiscount(total, this.date);
    }
    return total;
  }
}
