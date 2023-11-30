export default function divideFunction(numerator, denominator) {
  if (denominator != 0) {
    const quotient = numerator / denominator;
    return quotient;
  } else {
    throw new Error('cannot divide by 0');
  }
}
