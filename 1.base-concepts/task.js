"use strict"

 @param {number} a;
 @param {number} b;
 @param {number} c;
 @returns {number[]};


function solveEquation(a, b, c) {
  const d = b ** 2 - 4 * a * c;

  if (d === 0) {
    return [-b / (2 * a)];
  } else if (d > 0) {
    const sqrtD = Math.sqrt(d);
    return [
      (-b + sqrtD) / (2 * a),
      (-b - sqrtD) / (2 * a),
    ];
  } else {
    return [];
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const monthlyInterestRate = percent / 100 / 12;
  const bodyOfLoan = amount - contribution;
  const monthlyPayment = bodyOfLoan * (monthlyPercent +
    (monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1))) * countMonths;
  const roundedMonthlyPayment = parseFloat(monthlyPayment.toFixed(2));

  return +parseFloat(totalMortgagePayment).toFixed(2);
}

