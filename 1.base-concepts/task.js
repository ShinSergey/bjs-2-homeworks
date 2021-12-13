function solveEquation(a, b, c) {
  "use strict";
  let arr;
  let x1, x2;
  let discriminant = b * b - 4 * a * c;

  if (discriminant > 0) {
    x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    arr = [ x1, x2 ];
    return arr;
  } else if (discriminant === 0) {
    x1 = x2 = -b / (2 * a);

    arr = [ x1 ];
    return arr;
  } else {
    arr = [];
    return arr;
  }
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  "use strict";
  let totalAmount;
  let currentDay = new Date();
  let months;
  let dateCheck;

  function typeCheck(percent, contribution, amount) {
    parseInt(percent, contribution, amount);
    if (Number.isNaN(percent) || Number.isNaN(contribution) || Number.isNaN(amount)) {
      alert("Не верный формат ввода");
    }
  }

  typeCheck(percent, contribution, amount);

  function monthDiff(currentDay, date) {
    months = (date.getFullYear() - currentDay.getFullYear()) * 12;
    months -= currentDay.getMonth();
    months += date.getMonth();
    return months <= 0 ? 0 : months;
  }

  dateCheck = monthDiff(currentDay, date);

  function calc() {
    let payment;
    let amountLeft = amount - contribution;
    let percentMonthly = percent / 12;

    payment = amountLeft * (percentMonthly + (percentMonthly / (((1 + percentMonthly) ^ months) - 1)));

    totalAmount = payment * months;

    return totalAmount;
  }

  calc();
}
