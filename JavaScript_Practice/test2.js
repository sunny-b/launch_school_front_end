// Write a function that can rotate the last n
// digits of a number. For the rotation, rotate 1
// digit to the left and put the first digit to the right.

// Inputs:
  //First: A number that will be rotated
  //Second: The index of the number n places from the right.

// Output: The first number passed in, rotated.

// You're given a large number and then you're given the number n places from the right.
// You must take that number and put it at the end of the number, rotating it.


// Data structure: array.

// What needs to happen:
  // Take the number at the certain index and rotate to the right.

// Algorithm:
  // Turn the number into string and then array of characters.
  // Create a function that rotates a number to the right.
  // Create another function that splits the array in two parts based on the index.

  // First function:
   // Accepts an string
   // Turns string into array of chars, push(array.shift)
   // Join back into string and return string.

  // Second function
    // Accepts the number and index location.
    // Convert number into string.
    // Substring the first part of string.
    // Slice last part of string and pass into rotate function.
    // return rotated string.


function rotateNumbers(string) {
  var stringArr = string.split('');
  stringArr.push(stringArr.shift());
  return stringArr.join('');
}

function rotateRightmostDigits(number, index) {
  var numString = String(number);
  var length = numString.length;
  var stringFirstHalf = numString.substring(0, length - index);
  var stringSecondHalf = numString.slice(-index);
  var rotatedString = stringFirstHalf + rotateNumbers(stringSecondHalf);

  console.log(Number(rotatedString));
}



// test cases:
rotateRightmostDigits(735291, 1) // 735291
rotateRightmostDigits(735291, 2) // 735219
rotateRightmostDigits(735291, 3) // 735912
rotateRightmostDigits(735291, 4) // 732915
rotateRightmostDigits(735291, 5) // 752913
rotateRightmostDigits(735291, 6) // 352917
