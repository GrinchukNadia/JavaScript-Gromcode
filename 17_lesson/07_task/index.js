export const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  },
  setFullName(fullName) {
    const [firstName, lastName] = fullName.split(' ')
    this.firstName = firstName
    this.lastName = lastName
  },
}

console.log(user.getFullName())
user.setFullName('Nadia Grinchuk')
console.log(user.getFullName())