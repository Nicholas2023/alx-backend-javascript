const utils = require(./utils);

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const totalCost = utils.calculateNumber('SUm', totalAmount, totalShipping);
  console.log(`The total is ${totalCost}`);
};

module.exports = sendPaymentRequestToApi;
