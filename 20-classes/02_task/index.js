/* eslint-disable max-classes-per-file */

export class Vehicle {
  constructor(name, numberOfWheels) {
    this.name = name;
    this.numberOfWheels = numberOfWheels;
  }

  move() {
    console.log(`${this.name} is moving`);
  }

  stop() {
    console.log(`${this.name} stopped`);
  }
}

export class Ship extends Vehicle {
  constructor(maxSpeed) {
    super('Argo', false);

    this.maxSpeed = maxSpeed;
  }

  move() {
    console.log(`${this.name} lifting anchor up`);
    super.move()
  }

  stop() {
    super.stop()
    console.log(`${this.name} lifting anchor down`)
  }
}

const argoShip = new Ship
argoShip.move()
