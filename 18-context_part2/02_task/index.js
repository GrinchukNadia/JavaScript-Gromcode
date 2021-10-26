export const wallet = {
  transactions: [3, 69, 298, 89, 20, 34, 1],
  getMax() {
    return Math.max(...this.transactions) 
  },
  getMin() {
    return Math.min(...this.transactions)
  }
}

console.log(wallet.getMax())
console.log(wallet.getMin())