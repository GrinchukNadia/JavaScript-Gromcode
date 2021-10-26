export const user = {
  firstName: 'Doe',
  lastName: 'John',
  getFullName() {
    return(`${this.firstName} ${this.lastName}`)
  },
}

user.getFullName()