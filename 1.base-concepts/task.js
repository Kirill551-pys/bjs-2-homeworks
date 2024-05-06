"use strict"

function solveEquation(a, b, c) {
  const d = b ** 2 - 4 * a * c;

  if (d === 0) {
    return [-b / (2 * a)];
  } else if (d > 0) {
    const sqrtD = Math.sqrt(d);
    return [
      (-b + Math.sqrt(d) )/(2*a),
      (-b - Math.sqrt(d) )/(2*a),
    ];
  } else {
    return [];
}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const interestRate = percent / 100 / 12;
  const bodyOfCredit = amount - contribution;

  if (bodyOfCredit === 0) {
    return 0;
  }

  const monthlyPayment = bodyOfCredit * (interestRate + (interestRate / (((1 + interestRate) ** countMonths) - 1)));
  const totalPayment = monthlyPayment * countMonths;

  return +totalPayment.toFixed(2);
}
