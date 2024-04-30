"use strict"
function solveEquation(a, b, c) {
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
  
}