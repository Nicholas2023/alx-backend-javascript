export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  set brand(newBrand) {
    this._brand = newBrand;
  }

  get brand() {
    return this._brand;
  }

  set motor(newMotor) {
    this._motor = newMotor;
  }

  get motor() {
    return this._motor;
  }

  set color(newColor) {
    this._color = newColor;
  }

  get color() {
    return this._color;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];

    return new Species();
  }
}
