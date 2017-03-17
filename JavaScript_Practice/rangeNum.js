/* Input: Given a string of numbers
   output: string of numbers, expanded

   Requirements: the numbers must always increase. Ranges are deliminated by
   .., -, :. The significant part of the number is given next.

   significant is the lowest possible number that ends with that number that is
   bigger than the previous number.

   Start with new array. Split string by commas and iterate over it, pushing
   numbers to new string. Whenever hit a range, split it and process it.
   Join new array to be the valid string form
*/

var RANGE_SYMBOLS = new RegExp('[..\-:]');

function expandNumbers(string) {
  var newArr = [];
  var rangeArr = string.split(/,\s*/);
  var range;

  rangeArr.forEach(function(element) {
    if (RANGE_SYMBOLS.test(element)) {
      range = processRange(element, newArr);
    } else {
      range = element;
    }

    newArr.push(range);
  });

  return newArr.join(', ');
}

function processRange(range, array) {
  var lastIndex = array.length - 1;
  var rangeStr;

  range = range.split(RANGE_SYMBOLS);

  range.map(function(value, index) {
    if (index === 0) {
      while (value > array[lastIndex]) {

      }
    } else {

    }
  });
}

console.log(expandNumbers('1, 2, 3, 4, 5, 6')); // 1, 2, 3, 4, 5, 6
console.log(expandNumbers('1-3, 1:2')); // 1, 2, 3, 11, 12
console.log(expandNumbers('1:5:2')); // 1, 2, 3, 4, 5 ... 12
console.log(expandNumbers('562, 5-1')); // 562, 565 ... 571
console.log(expandNumbers('104-02')); // 104, 105, ... 202
console.log(expandNumbers('1-3, 2-1')); // 1, 2, 3, 12 ... 21
