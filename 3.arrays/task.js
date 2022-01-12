function compareArrays(arr1, arr2) {  

  return arr1.length === arr2.length &&
  arr1.every((element, index) => element === arr2[index]);
}

  function advancedFilter(arr) {
    let resultArr;

    resultArr = arr.filter(isPositive => isPositive >= 1).filter(multiple3 => multiple3 % 3 === 0).map(x10 => x10 * 10);

    return resultArr;
  }
