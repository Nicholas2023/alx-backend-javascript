export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  set name(newName) {
    this._name = newName;
  }

  get name() {
    return this._name;
  }

  set code(newCode) {
    this._code = newCode;
  }

  get code() {
    return this._code;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
