class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    sayHi() {
        console.log(`Hi, I am ${this.name}`)
    }

    requestNewPhoto() {
        console.log(`New photo request was sent for ${this.name}`)
    }

    setAge(age) {
        if(age < 0) {
            return false
        }

        this.age = age

        if(age >= 25) {
            this.requestNewPhoto()
        }
        return age
    }

    static createEmpty() {
      return new User ('', null)
    }
}

const user1 = new User('Nadia', 23)
user1.sayHi()
user1.requestNewPhoto()
console.log(user1.setAge(-2))
console.log(user1.setAge(2))
console.log(user1.setAge(30))
const user2 = User.createEmpty()
console.log(user2)