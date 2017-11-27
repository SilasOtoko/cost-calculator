export function calculateYearlyCost(amount, price) {
  const cost = amount * price * 12;
  return cost;
}

export function calculateYearlyAmount(amount) {
  const yearlyAmount = amount * 12;
  return yearlyAmount;
}
