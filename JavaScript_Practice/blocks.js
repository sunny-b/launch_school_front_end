//
// blocks that contain letters. Can’t spell words that contain both letters on block.
//
// Input: string
//
// Output: boolean.
//
// Look at block and see if it contains letters that are in a pair.
// Word can’t be longer than 13 letters.
// Can’t have double letters.
// Ignore case
//
// How do we know if it contains both?
//
// * Go letter by letter and check if the other pair is contained in the string.

var BLOCK_PAIRS = {
  'B': 'O', 'G': 'T', 'V': 'I',
  'X': 'K', 'R': 'E', 'L': 'Y',
  'D': 'Q', 'F': 'S', 'Z': 'M',
  'C': 'P', 'J': 'W', 'N': 'A', 'H': 'U',
};

function isBlockWord(string) {
  var char;
  var pair;
  var regex;
  var remainder;

  if (string.length > 13) { return false; }

  for (var i = 0; i < string.length; i++) {
    char = string[i];
    pair = BLOCK_PAIRS[char];
    regex = new RegExp('[' + char + pair + ']', 'i');
    remainder = string.slice(i + 1);

    if (regex.test(remainder)) {
      return false;
    }
  }

  return true;
}

console.log(isBlockWord('BATCH')); //true
console.log(isBlockWord('aa')); //false
console.log(isBlockWord('get')); //false
console.log(isBlockWord('GOAL')); //true
console.log(isBlockWord('BGVXRLZFDCJHN')); // true
console.log(isBlockWord('BGVXRLZFDCJHNQ')); // false
console.log(isBlockWord('BGVXRLZFBCJHN')); // False
console.log(isBlockWord('BGVXRLZODCJHN')); // false
