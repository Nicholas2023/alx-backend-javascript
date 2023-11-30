import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new TypeError('amount must be a number');
    } else {
      this._amount = newAmount;
    }
  }

  get amount() {
    return this._amount;
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new TypeError('currency must be a Currency');
    } else {
      this._currency = newCurrency;
    }
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return (`${this.amount} ${this.currency.name} (${this.currency.code})`);
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    } else if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    } else {
      return (amount * conversionRate);
    }
  }
}
