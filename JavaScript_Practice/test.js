function myOwnEvery(array, func) {
  for (var i = 0; i < array.length; i++) {
    if (!func(array[i])) {
      return false;
    }
  }

  return true;
}
function areAllNumbers(array) {
  // console.log(myOwnEvery(array, isANumber));
}

var isANumber = function(value) {
  return typeof value === 'number';
};

areAllNumbers([1, 5, 6, 7, '1']);             // false
// areAllNumbers([1, 5, 6, 7, 1]);
