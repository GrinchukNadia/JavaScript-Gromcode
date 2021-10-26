const user = {
  firstName: 'John',
  lastName: 'Doe',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(newName) {
    const [firstName, lastName] = newName.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  },
};

export default user;

console.log(user.fullName);
console.log((user.fullName = 'Grinchuk Nadia'));
console.log(user.firstName);
console.log(user.fullName);
