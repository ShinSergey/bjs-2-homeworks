function compareArrays(arr1, arr2) {
  
  if (arr1.length === arr2.length && arr1.every(callback => callback === arr2[index])) {
    return true;
  } else {
    return false;
  }
}

  function advancedFilter(arr) {
    let resultArr;

    resultArr = arr.filter(isPositive => isPositive >= 1).filter(multiple3 => multiple3 % 3 === 0).map(x10 => x10 * 10);

    return resultArr;
  }
