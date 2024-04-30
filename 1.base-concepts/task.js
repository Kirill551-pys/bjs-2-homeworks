"use strict"
function solveEquation(a, b, c) {
  const d = b ** 2 - 4 * a * c;
  let arr = [];

  if (d < 0) {
  } else if (d === 0) {
    arr.push(-b / (2 * a));
  } else {
    arr.push((-b + Math.sqrt(d)) / (2 * a));
    arr.push((-b - Math.sqrt(d)) / (2 * a));
  }


  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthlyInterestRate = percent / 100 / 12;
  const bodyOfLoan = amount - contribution;
  const monthlyPayment = bodyOfLoan * (monthlyInterestRate + (monthlyInterestRate / (Math.pow(1 + monthlyInterestRate, countMonths) - 1)));
  const roundedMonthlyPayment = parseFloat(monthlyPayment.toFixed(2));

  return roundedMonthlyPayment;
}
