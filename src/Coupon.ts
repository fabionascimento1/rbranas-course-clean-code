export default class Coupon {
  constructor(
    readonly code: string,
    readonly porcentage: number,
    readonly expireDate?: Date
  ) {}

  isValid() {
    if (!this.expireDate) return true;
    const today = new Date();
    return this.expireDate.getTime() >= today.getTime();
  }
  isExpired() {
    return !this.isValid();
  }
}
