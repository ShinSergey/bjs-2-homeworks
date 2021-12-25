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
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  avg = (sum/arr.length).toFixed(2)

  console.log({ min: min, max: max, avg: parseFloat(avg) });
  return { min: min, max: max, avg: parseFloat(avg) };
}

getArrayParams([99, -99, 10]);

// Задание 2
let meat = [[1, 2, 3, 4], [10, 20, -10, -20]]

function worker(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;

  for (let k = 0; k < arrOfArr.length; k++) {
    let thisFunc = func(arrOfArr[k]);
    if (thisFunc > max) {
      max = thisFunc;
    }
  }

  return max;
}

makeWork(meat, worker);

// Задание 3
function worker2(arr) {
  let min = arr[0];
  let max = min;

  for (let i = 1; i < arr.length; ++i) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  let abs;

  return abs = Math.abs(max - min);
}

makeWork(meat, worker2);