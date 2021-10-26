export class Wallet {
  constructor() {
    this.amount = 0;
  }

  getBalance() {
    return this.amount;
  }

  deposit(fund) {
    this.amount += fund;
  }

  withdraw(fund) {
    if (fund <= this.amount) {
      this.amount -= fund;
    } else {
      console.log('No enough funds');
    }
  }
}

const myWallet = new Wallet

console.log(myWallet.getBalance())
myWallet.deposit(48)
console.log(myWallet.getBalance())
myWallet.withdraw(40)
console.log(myWallet.getBalance())
myWallet.withdraw(10)
console.log(myWallet.getBalance())