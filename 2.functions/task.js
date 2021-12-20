// Задание 1
function getArrayParams(arr) {
  let avg;
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] > max) {
      max = arr[i];
    }
    else if (arr[i] < min) {
      min = arr[i];
    }
  }

  avg = sum / arr.length;
  avg = avg.toFixed(2);

  // console.log({ min: min, max: max, avg: parseFloat(avg) });
  return { min: min, max: max, avg: parseFloat(avg) };
}

// Задание 2
function worker(arr) {
  let sum;

  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  // Ваш кода
  // for ...
  
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
