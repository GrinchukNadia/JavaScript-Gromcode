export function defer(func, ms) {
  return function() {
    setTimeout(() => func.apply(this, arguments), ms) // eslint-disable-line
  }
}

const user = {
  name: 'Nadia',
  sayHi() {
    console.log(`Hi, ${this.name}`)
  }
}

const hiName = defer(user.sayHi, 1500)

hiName.call({name: 'bob'})

// ----------------------------------------------------------
 const callbackPrompt = {
  message: 'Write your phone number',

  showPrompt() {
    const userPhone = prompt(this.message);
    console.log(userPhone);
  }
};

const phoneNumbr = defer(callbackPrompt.showPrompt, 1500)
phoneNumbr.call({message: 'Another message'})

// ---------------------------------------------------------

const hi = (name, lastName) => {
  console.log(`Hi, dear ${lastName} ${name}!`);
}

const sayMeHi = defer(hi, 1500)
const sayLubaHi = defer(hi, 2000)

sayMeHi('Nadia', 'Hrinchuk')
sayLubaHi('Luba', 'Babaeva')