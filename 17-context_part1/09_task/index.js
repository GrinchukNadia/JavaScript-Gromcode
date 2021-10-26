export function bind(func, context, ...rest) {
  return function (...args) {
    return func.apply(context, rest.concat(args));
  };
}

const person = {
  name: 'Tom',
  sayHello(age, city) {
    console.log(`Hi, I am ${this.name} from ${city}. I am ${age} years old.`);
  },
};

const hello = person.sayHello;
bind(hello, person, 25, 'Kyiv')();
