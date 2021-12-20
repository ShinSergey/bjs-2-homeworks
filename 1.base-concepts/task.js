function solveEquation(a, b, c) {
  "use strict";
  let arr;
  let x1, x2;
  let discriminant = b * b - 4 * a * c;

  if (discriminant > 0) {
    x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    x2 = (-b - Math.sqrt(discriminant)) / (2 * a);

    arr = [x1, x2];
    return arr;
  } else if (discriminant === 0) {
    x1 = x2 = -b / (2 * a);

    arr = [x1];
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
  let amountLeft = amount - contribution;

    parseInt(percent, contribution, amount);
    if (isNaN(percent)) {
      return("Параметр \"Процентная ставка\" содержит неправильное значение \"" + percent + "\"");
    } else if (isNaN(contribution)) {
      return("Параметр \"Начальный взнос\" содержит неправильное значение \"" + contribution + "\"");
    } else if (isNaN(amount)) {
      return("Параметр \"Общая стоимость\" содержит неправильное значение \"" + amount + "\"");
    }

  function monthDiff(currentDay, date) {
    months = (date.getFullYear() - currentDay.getFullYear()) * 12;
    months -= currentDay.getMonth();
    months += date.getMonth();
    return months <= 0 ? 0 : months;
  }

  let dateCheck;
  dateCheck = monthDiff(currentDay, date);

  let percentMonthly = (percent / 100) / 12;
  let payment = amountLeft * (percentMonthly + (percentMonthly / ((Math.pow((1 + percentMonthly), months)) - 1)));
  totalAmount = payment * months;

  totalAmount = totalAmount.toFixed(2);

  console.log(parseFloat(totalAmount));

  return parseFloat(totalAmount);
}
