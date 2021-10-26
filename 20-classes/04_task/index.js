export class Order {
  constructor(price, city, type) {
    this.price = price;
    this.city = city;
    this.type = type;
    this.id = (Math.random() * 1000).toFixed();
    this.dateCreated = new Date();
    this.isConfirmed = false;
    this.dateConfirmed = '';
  }

  checkPrice() {
    return this.price > 1000
  }

  confirmOrder() {
    if (!this.isConfirmed) {
      this.isConfirmed = true;
      this.dateConfirmed = new Date();
    }
  }

  isValidType() {
    return (this.type === 'Buy' || this.type === 'Sell')
  }
}

const myOrder = new Order(145, 'Kyiv', 'Buy')

console.log(myOrder)
console.log(myOrder.checkPrice())
myOrder.confirmOrder()
console.log(myOrder)
console.log(myOrder.isValidType())
