function compareArrays(arr1, arr2) {
  let result;

  result = arr1.every(isEqual => isEqual === arr2);

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  resultArr = arr.filter(isPositive => isPositive >= 1).filter(multiple3 => multiple3 % 3 === 0).map(x10 => x10 * 10);

  return resultArr; // array
}
