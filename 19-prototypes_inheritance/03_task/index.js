export function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};
User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};
User.prototype.setAge = function (newAge) {
  this.age = newAge;
  if (newAge < 0) {
    return false;
  } 
  if (newAge >= 25) {
    this.requestNewPhoto();
  }
  return newAge;
};

const Nadia = new User('Nadia', 30)

Nadia.sayHi()
Nadia.requestNewPhoto()
console.log(Nadia.setAge(20))