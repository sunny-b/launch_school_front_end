// Odd Numbers
/* Log all numbers from 1 to 99 inclusive on separate lines
Input: nothing
Output: numbers 1 to 99, odd.

Data structure: None
Algorithm: Use a for loop to loop through 1 to 99 and print out the odd values
*/

function printOddNumbers(limit) {
  var numbers = Array.apply(null, {length: limit + 1}).map(Number.call, Number);

  numbers.shift();
  numbers.forEach(function(value) {
    if (value % 2 === 0) {
      console.log(value);
    }
  });
}



// How Big is Room

/* Get length and width of a room from
users and log the area in sq meters and
sq feet.

Input: two strings
Output: a string with values.

Data Structure: String and numbers

Algorithm:
  - Use prompt to get length and width in meters
  - Convert to numbers and find total square meters.
  - Convert square meters into square feet
  - Output the areas in a string
*/

function generateReturnString(area1, area2, boolean) {
  if (boolean) {
    return 'The area of the room is ' + area1.toFixed(2) +
        ' square meters (' + area2.toFixed(2) + ' square feet).'
  } else {
    return 'The area of the room is ' + area2.toFixed(2) +
        ' square meters (' + area1.toFixed(2) + ' square feet).'
  }
}

function roomArea() {
  var CONVERSION = 10.7639;

  var length = Number(prompt('Enter the length of the room:'));
  var width = Number(prompt('Enter the width of the room:'));
  var type = prompt('What measurement type, meters or feet?');
  var area = length * width;
  var isMeters = true;
  var otherArea;


  if (type.toLowerCase() === 'meters') {
    otherArea = area * CONVERSION;
  } else {
    otherArea = area / CONVERSION;
    isMeters = false;
  }

  console.log(generateReturnString(area, otherArea, isMeters));
}

// Tip Calculator

/* Prompt user for bill and tip percentage
return the tip amount in dollars and the total in dollars.

input: 2 strings, first is bill amount in dollars, second is tip percentage
output: 2 strings, first saying the tip amount in dollars, second saying total in dollars

Datatype: number

Algorithm:
  - Prompt users for bill and percentage
  - Convert to numbers
  - Calculate tip total and add to total bill.
  - Return the values
*/

function tipCalculator() {
  var bill = parseFloat(prompt('What is the bill?'));
  var tipPercent = parseFloat(prompt('What is the tip percentage?'));
  var tipTotal = (tipPercent / 100) * bill;
  var billTotal = bill + tipTotal;

  console.log('The tip is $' + tipTotal.toFixed(1));
  console.log('The total is $' + billTotal.toFixed(1));
}

// Sum or Product

/* ask user for number greater than 0 and ask user if they want
to determine the sum or product of all numbers between 1 and integer.

input: 2 strings, first is a number, second is sum or Product
output: A string with the desired calculation.

Datatype: sum/number

Algorithm:
 - Prompt user for integer and either s or p for sum or product.
 - Use for loop to loop through integers and sum or multiply them
 - return in string
 */

function compute() {
  var numbers = prompt('Please enter multiple integers separated by spaces:');
  var arrayOfNums = numbers.split(' ').map(Number);
  var productOrSum = prompt('Enter "s" to compute the sum, "p" to compute the product:');
  var isSum = productOrSum.toLowerCase() === 's';
  var type = isSum ? 'sum' : 'product';
  var total;

  total = arrayOfNums.reduce(function(acc, value) {
    if (isSum) {
      return acc + value;
    } else {
      return acc * value;
    }
  });



  console.log('The ' + type + ' of the integers ' +
              arrayOfNums.join(', ') + ' is ' + total + '.');
}

// short long short

/* Create a function that takes two strings as arguments
and determines which one is longer. It then returns both strings
concatenated in this format => Short + Long + Short

input: 2 strings of different length
output: a string with the short, long, short concatenated.

Datatype: string

Algorithm:
  - Compare the lengths of each to find which one is longer.
  - return the strings concatenated together in the proper order
*/

function shortLongShort(string1, string2) {
  var long = (string1.length > string2.length ? string1 : string2);
  var short = (string1.length < string2.length ? string1 : string2);

  console.log(short + long + short);
}

// shortLongShort('abc', 'defgh');   // "abcdefghabc"
// shortLongShort('abcde', 'fgh');   // "fghabcdefgh"
// shortLongShort('', 'xyz'); // 'xyz'


// Leap Year

/* Create a function that can tell whether a year passed in is a leap Year

Input: A number representing a year
Output: a boolean, either true or false

Datatype: number

Algorithm
  - Create a conditional tree that will determine if year is a leap year

Conditions for leap year:
  - Divisible by 4
  - If divisible by 100, then it's also divisible by 400
*/

function isLeapYear(year) {
  if (year >= 1752) {
    console.log((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
  } else {
    console.log(year % 4 === 0);
  }

}

// isLeapYear(2016);     // true
// isLeapYear(2015);     // false
// isLeapYear(2100);     // false
// isLeapYear(2400);     // true
// isLeapYear(240000);   // true
// isLeapYear(240001);   // false
// isLeapYear(2000);     // true
// isLeapYear(1900);     // false
// isLeapYear(1752);     // true
// isLeapYear(1700);     // true
// isLeapYear(1);        // false
// isLeapYear(100);      // true
// isLeapYear(400);      // true


// Multiples of 3 and 5

/* Sum all numbers from 1 to a certain limit provided in if the numbers are divisible by 3 or 5

input: upper limit, number
output: number, summation

Datatype: number, sum

Algorithm:
  - Use a for loop to loop from lower limit to higher limit
  - In each loop, test if value is divisible by 3 or 5 and add to sum if they are
  - return sum
*/

function multisum(limit) {
  var sum = 0;

  for (var i = 1; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  console.log(sum);
}

// multisum(3);      // 3
// multisum(5);      // 8
// multisum(10);     // 23
// multisum(1000);   // 234168
// multisum(0); // 0
// multisum(1); // 0


// ASCII String Value

/* Given a string, return the total value of the string using the ASCII values

input: string
output: number, sum of ascii values

Datatype = array

Algorithm:
  - Split string into array and reduce to a sum value
*/

function asciiValue(string) {
  var sum = 0;

  sum += string.split('').reduce(function(acc, val) {
    return acc + val.charCodeAt();
  }, 0);

  console.log(sum);
}
//
// asciiValue('Four score');         // 984
// asciiValue('Launch School');      // 1251
// asciiValue('a');                  // 97
// asciiValue('');                   // 0



// Switch Toggles
/*
Description:
  - Row of switches numbered 1 to n
  - Switch is initially off
  - Loop through and switch on the switches n times.
  - First pass is every switch, then multiples of 2, then 3, etc.

Input: Number, amount of switches.
Output: Array, which switches are turned on.

Datatype: Object

Constraints:
  - Must be a number greater than 0.
  - Return only the switch numbers that are turned on
  - Loop through n number of times before returning.
  - The multiple is increased by one each loop

Algorithm:
  - Store data in object.
  - 'On' will be true and 'off' will be false.
  - Since the first loop turns all switches on, can create object with all true.
  - Keep track of which switches to turn on using multiple count.
  - Use a while and for loop
  - While multiple < switches, use for loop to loop through all switches and turn on/off multiples.
  - Use Object.keys() and array.filter() to return just the switch numbers that are on.
*/

function lightsOn(amount) {
  var switches = {};
  var multiple = 1;
  var onLights;

  loopThroughSwitches(switches, multiple, amount);
  onLights = retrieveOnLights(switches);

  return onLights;
}

function retrieveOnLights(switches) {
  return Object.keys(switches).filter(function(switchNum) {
    return switches[switchNum];
  });
}

function loopThroughSwitches(switches, multiple, amount) {
  var i;

  while (multiple <= amount) {
    for (i = multiple; i <= amount; i++) {
      switches[i] = (i % multiple === 0 ? !switches[i] : switches[i]);
    }

    multiple++;
  }
}
//
// lightsOn(5); // [1, 4]
// lightsOn(10); // [1, 4, 9]
// lightsOn(26); // [1, 4, 9, 16, 25]
// lightsOn(100);  // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
// lightsOn(0); // []
// lightsOn(-1); // []
// lightsOn(null); // []
// lightsOn(undefined) // []


// Diamonds

/* Construct a 4 pointed star that is as long as and wide as the number passed in.
  - Number is always odd
  - Stars are filled in from the middle and go out. Have space on either side.
  - Each starts on new row

Input: Number, length and width of star
Output: Star on console.

Datatype: Array of strings

Algorithm:
  - Initialize array
  - Figure out how many spaces need to go on either side
  - For either row of the row, put left spaces, stars, right spaces into array.
  - Iterate though array and log strings to console.

*/

function diamond(width) {
  var starRows = [];

  createTopHalf(width, starRows);
  createBottomHalf(width, starRows);
  printStarsToConsole(starRows)
}

function printStarsToConsole(starRows) {
  starRows.forEach(function(row) {
    console.log(row);
  });
}

function createTopHalf(width, starRows) {
  for (var row = 1; row <= width; row += 2) {
    starRows.push(createStarRow(row, width));
  }
}

function createBottomHalf(width, starRows) {
  for (var row = width - 2; row >= 1; row -= 2) {
    starRows.push(createStarRow(row, width));
  }
}

function createStarRow(row, width) {
  var string = outerSpaces(row, width) + '*';

  if (row !== 1) {
    string += middleSpaces(row) + '*';
  }

  return string + outerSpaces(row, width);
}

function outerSpaces(stars, width) {
  var spacesAmount = (width - stars) / 2;
  return ' '.repeat(spacesAmount);
}

function middleSpaces(stars) {
  var spacesAmount = stars - 2;
  return ' '.repeat(spacesAmount);
}
//
// diamond(1);
// // logs
// // *
//
// diamond(3);
// // logs
// //  *
// // * *
// //  *
//
// diamond(9);
// // logs
// //     *
// //    * *
// //   *   *
// //  *     *
// // *       *
// //  *     *
// //   *   *
// //    * *
// //     *


// Spelling Blocks
/* Given spelling blocks, tell whether a work could be spelt using those spelling Blocks
Constraints
  - No letters can repeated
  - cannot use a letter if it's partner has been used.
  - No word greater than 13 letters.
  - case insensitive;

Input: String
Output: Boolean

Datatype: String and object

Algorithm:
  -
  - Iterate through string
  - At each letter, check to see if rest of string has either the same letter or partner
  - If it does, return false.
  - Return true if the string is clean
*/

var BLOCK_PAIRS = { b: 'o', g: 't', v: 'i', x: 'k',
                    r: 'e', l: 'y', d: 'q', f: 's',
                    z: 'm', c: 'p', j: 'w', n: 'a',
                    h: 'u' };

function isBlockWord(string) {
  var letterArray = string.toLowerCase().split('');;
  var remainder;
  var regex;
  var letter;
  var pair;

  for (var i = 0; i < string.length; i++) {
    remainder = letterArray.slice();
    remainder.splice(i, 1);
    letter = letterArray[i];
    pair = BLOCK_PAIRS[letter];
    regex = new RegExp('(' + letter + '|' + pair + ')');

    if (regex.test(remainder.join(''))) return false;
  }

  return true;
}

// isBlockWord('BATCH'); // true
// isBlockWord('BUTCH'); // false
// isBlockWord('jest');  // true
// isBlockWord('bgvxrldfzcjnh'); // true
// isBlockWord('bgvxrldfzcjnhs'); // false
// isBlockWord('bgvxrldfzcjns'); // false
// isBlockWord('butch'); // false
// isBlockWord('batch'); // true
// isBlockWord('floW');  // true
// isBlockWord('APPLE'); // false
// isBlockWord('apple'); // false
// isBlockWord('apPLE'); // false
// isBlockWord('Box');   // false


// Caesar Cipher
/* This cipher has you offset the letters in a sentence or string by
a certain amount. The amount you offset by is called the 'key'.
If you know the 'key', you can decode the sentence. Any character not a letter
is kept the same.

inputs: string and number(shift amount)
outputs: encrypted string

Datatype: string

Algorithm:
  - Have a constant with all the letters in the alphabet
  - Use for loop to iterate through all letters and replace with shifted letter
    - If character is not letter, leave it be
    - If letter is capitalized, capitalize the shifted letter.
  - return encrypted string
*/

var ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

function caesarEncrypt(string, shift) {
  var encrypted = '';
  var char;
  var letter;
  var index;

  for (var i = 0; i < string.length; i++) {
    letter = string[i];
    if (/[A-Z]/.test(letter)) {
      index = ALPHABET.indexOf(letter.toLowerCase());
      encrypted += ALPHABET[(index + shift) % 26].toUpperCase();
    } else if (/[a-z]/.test(letter)) {
      index = ALPHABET.indexOf(letter);
      encrypted += ALPHABET[(index + shift) % 26];
    } else {
      encrypted += letter;
    }
  }

  return encrypted;
}

// caesarEncrypt('A', 0);       // 'A'
// caesarEncrypt('A', 3);       // 'D'

// Wrap around
// caesarEncrypt('y', 5);       // 'd'
// caesarEncrypt('a', 47);      // 'v'

// All letters
// caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25);
// ZABCDEFGHIJKLMNOPQRSTUVWXY
// caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!

// Many non-letters
// caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2);
// Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?



// Vigenere Cipher

/* Input: String to be encrypted, key word
Output: encrypted text

The Vigenere cipher takes a string and uses a keyword to encrypt the string.
How it does this is use the keyword to determine how much to shift each letter
in the long string. You go letter by letter and match it up with the keyword and
shift the letter the same amount that the keyword letter is shifted from 'a'

Datatype: array

Algorithm:
  - Convert string to array of chars
  - Map through the chars and test whether the given letter matches an alphabet letter
    - If it does, shift letter and increase keyword letter index
      - Fetch the index of the keyword letter and
      use that same index to tell the shift function how many spaces to shift by
    - If it doesn't, continue onto next char.
  - Join together the resulting array and return the string.

Test Cases:
*/

function vigenereCipher(string, keyword) {
  keyword = keyword.toLowerCase();
  var stringArr = string.split('');
  var keywordIndex = 0;
  var length = keyword.length;
  var shiftAmount;
  var isUppercase;

  var encryptedArr = stringArr.map(function(char) {
    shiftAmount = ALPHABET.indexOf(keyword[keywordIndex]);

    if (/[A-Z]/.test(char)) {
      isUppercase = true;
    } else if (/[a-z]/.test(char)) {
      isUppercase = false;
    } else {
      return char
    }

    keywordIndex = (keywordIndex + 1) % length;
    return encrypt(char, shiftAmount, isUppercase);
  });

  return encryptedArr.join('');
}

function encrypt(letter, shift, upperCase) {
  var index;
  var encrypted;

  if (upperCase) {
    index = ALPHABET.indexOf(letter.toLowerCase());
    encrypted = ALPHABET[(index + shift) % 26].toUpperCase();
  } else {
    index = ALPHABET.indexOf(letter);
    encrypted = ALPHABET[(index + shift) % 26];
  }

  return encrypted;
}

// vigenereCipher("Pineapples don't go on pizzas!", 'meat'); // Bmnxmtpeqw dhz'x gh ar pbldal!
// vigenereCipher("Pineapples don't go on pizzas!", 'MeAt'); // Bmnxmtpeqw dhz'x gh ar pbldal!
// vigenereCipher("Pineapples don't go on pizzas!", 'a'); // Pineapples don't go on pizzas!
// vigenereCipher("Pineapples don't go on pizzas!", 'A'); // Pineapples don't go on pizzas!
// vigenereCipher("Pineapples don't go on pizzas!", 'Aa'); // Pineapples don't go on pizzas!
// vigenereCipher("Pineapples don't go on pizzas!", 'cab'); // Riogaqrlfu dpp't hq oo riabat!
// vigenereCipher('Dog', 'Rabbit') // Uoh


// Seeing Stars

/* Input: Number, width of star
Output: star formation, console Output

Problem: Pass in an odd number greater or equal to 7 into the function.
What is output is an 8 point star that has n - 1 / 2 rows on top and bottom
and a middle line that is n stars in width

Algorithm: Split into 3 parts
  Top Half
    - The first row has three stars separated by ((n - 1) / 2) - 1 spaces.
    The number decreases by 1 as each row goes until the n - 1 / 2 row. The spaces are put on the outside with each row.
    - Outer spaces, Row - 1. Inner spaces, halfLength - row

  Middle
    - line of stars n length

  Bottom half
    - Same as top half but reversed.

Datatype: Array of strings
*/

function star(width) {
  var starRows = [];
  var halfLength = (width - 1) / 2;
  var middleRow = '*'.repeat(width);

  topHalf(halfLength, starRows);
  starRows.push(middleRow);
  bottomHalf(halfLength, starRows);

  starRows.forEach(function(row) {
    console.log(row);
  });
}

function topHalf(halfLength, starRows) {
  for (var i = 0; i < halfLength; i++) {
    starRows.push(createRow(i, halfLength));
  }
}

function bottomHalf(halfLength, starRows) {
  for (var i = halfLength - 1; i >= 0; i--) {
    starRows.push(createRow(i, halfLength));
  }
}

function createRow(row, halfLength) {
  var outerSpace = ' '.repeat(row);
  var innerSpace = ' '.repeat((halfLength - 1) - row);
  var innerStars = ['*', '*', '*'];

  return outerSpace + innerStars.join(innerSpace);
}


// star(7)
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

// console.log('');

// star(9)
// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *



// Crunch

/* input: string with repeated characters
output: string with no adjacenting repeating characters

remove duplicate characters

data structure: array

Algorithm:
  - create a new string to house non-repeat characters
  - break string into array and iterate through.
  - keep track current character and if next character is same, skip past it and don't put in return string
  - return simplified string
*/

// clever regex solution

function crunch(string) {
  var uniqueStr = ''
  var currentChar;

  string.split('').forEach(function(char) {
    if (char !== currentChar) {
      uniqueStr += char;
      currentChar = char;
    }
  });

  return uniqueStr;
}

// var answer = crunch('ddaaiillyy ddoouubbllee');        // 'daily double'
// var answer1 = crunch('4444abcabccba');                  // '4abcabcba'
// var answer2 = crunch('ggggggggggggggg');                // 'g'
// var answer3 = crunch('a');                              // 'a'
// var answer4 = crunch('');


// Console Box

/*Input: string
Output: a box containing the string

Data-structure: array of strings

Algorithm:
  - Create beginning and ending strings and the empty rows and add those to the array at beginning and end
  - Only the middle row of some challenge.
*/

function logInBox(string, width = 2) {
  width = width - 2;
  var border = '+-' + '-'.repeat(width) + '-+\n';
  var emptyRow = '| ' + ' '.repeat(width) + ' |\n';
  var middleRow = '';
  var begin = 0;
  var substring;

  if (string.length <= width) {
    middleRow += '| ' + string + ' '.repeat(width - string.length) + ' |\n';
  } else {
    while (begin < string.length) {
      substring = string.substr(begin, width).trim();
      substring += ' '.repeat(width - substring.length)

      middleRow += '| ' + substring + ' |\n';
      begin += width;
    }
  }

  console.log(border +
               emptyRow +
               middleRow +
               emptyRow +
               border);
}

// logInBox('To boldly go where no one has gone before.', 20);

// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

// logInBox('');
// +--+
// |  |
// |  |
// |  |
// +--+


// Stringy

/* Create a function that accepts a positive number and gives back an alternating
series of '1's and '0's depending on the length passed in.

input: number
output: string of 1 and 0s, n long.

data structure: string

Algorith:
  - Begins with '1'
  - For loop through 1 to n, the value of the string will be String(i % 2);
  - return string
*/

function stringy(num) {
  var numString = '';
  for (var i = 1; i <= num; i++) { numString += String(i % 2); }

  return numString;
}
//
// var answer = stringy(6) === '101010';
// var answer1 = stringy(9) === '101010101';
// var answer2 = stringy(4) === '1010';
// var answer3 = stringy(7) === '1010101';


// Fibonacci Number location by length

/*
Create a function that accepts a number which represents
number of digits. Return the first index of the number that has
that many digits

input: number, representing number of digits
output: number, index of first number who has that many digits

Data structure: Array

Algorithm:
  - Use a while loop that adds last two numbers and pushes a new one to array
  - Loop until last part of array fulfills specification.
  - Start with 1 and 1
*/

function findFibonacciIndexByLength(digitLength) {
  var fibNums = [1, 1];
  var round = 2;
  var lastIndex = fibNums.length - 1;

  while (String(fibNums[lastIndex]).length < digitLength) {
    fibNums.push(fibNums[lastIndex] + fibNums[lastIndex - 1]);
    lastIndex++;
    round++;
  }

  console.log(round);
}

// findFibonacciIndexByLength(2);     // 7
// findFibonacciIndexByLength(10);    // 45
// findFibonacciIndexByLength(16);    // 74


// Triangle

/*
create a function that outputs a triangle with with all sides the length passed in

input: number, side length
output: triangle output

Data structure: array of strings

Algorithm:
  - For loop of 1 to 9. Space to left is n - (n - (n - 1)) and stars is n - (n - 1)
  - console.log the joined array with '\n'
*/

function triangle(length) {
  var rows = [];

  for (var i = 1; i <= length; i++) {
    rows.push(spaces(i, length) + stars(i));
  }

  console.log(rows.join('\n'));
}

function spaces(padding, width) {
  return ' '.repeat(width - padding);
}

function stars(padding) {
  return '*'.repeat(padding);
}

//
// triangle(5);
//
// //     *
// //    **
// //   ***
// //  ****
// // *****
//
// triangle(9);
//
// //         *
// //        **
// //       ***
// //      ****
// //     *****
// //    ******
// //   *******
// //  ********
// // *********


var NOUNS = ['dog', 'cat', 'butt'];
var VERBS = ['walk', 'swim', 'jog'];
var ADJECTIVES = ['red', 'blue', 'brown'];
var ADVERB = ['quickly', 'slowly', 'lazily'];

// var noun = prompt('Enter a noun:');
// var verb = prompt('Enter a verb:');
// var adj = prompt('Enter an adjective:');
// var adv = prompt('Enter an adverb:');
//
// console.log('Do you ' + verb +
//             ' your ' + adj + ' ' +
//             noun + ' ' + adv + "? That's hilarious!");


// Double doubles

/*
Create a function that accepts a number and returns double that number
unless it is a double number. A double number is any number
that is even length and whose left side digits are the same as the
right side

input: number
output: number

data structure: string

Algorithm:
  - Turn number into string
  - split string in half
  - compare left and right side
  - if they are the same, return normal, else return double
*/

function twice(number) {
  var numString = number.toString();
  var halfLength = numString.length / 2
  var leftSide = numString.substr(0, halfLength);
  var rightSide = numString.substr(halfLength);

  return (leftSide === rightSide ? number : number * 2);
}

// twice(37);                 // 74
// twice(44);                 // 44
// twice(334433);             // 668866
// twice(444);                // 888
// twice(107);                // 214
// twice(103103);             // 103103
// twice(3333);               // 3333
// twice(7676);               // 7676


// Grade book
/*
write a function that calculates the average of three scores passed in
and returns a letter grade

input: test scores
output: letter grade

data structure: number

Algorithm:
  - average scores together
  - determine grade based on grade criteria
  - return letter grade
*/

function getGrade(score1, score2, score3) {
  var average = (score1 + score2 + score3) / 3;

  console.log(determineGrade(average));
}

function determineGrade(average) {
  if (average >= 90) {
    return 'A';
  } else if (average >= 80) {
    return 'B';
  } else if (average >= 70) {
    return 'C';
  } else if (average >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

// getGrade(95, 90, 93) // "A"
// getGrade(50, 50, 95) // "D"


// Cleanup

function cleanUp(string) {
  return string.replace(/\W+/g, ' ');
}

//
// cleanUp('---what\'s my +*& line?');  // ' what s my line '
// cleanUp('@#$^what\'#$%@s my +%^$*& line?$%');  // ' what s my line '


// Century

/*
write a function that accepts a year and returns a string of the century number

input: number, year
output: string, century number

data structure: string

Algorithm:
  - If year is less than a century, return 1st
  - slice off the last two digits of the year to get century.
  - find the appropriate ending label for that year
  - return string
*/

function century(year) {
  var centuryStr = String(Math.floor((year - 1) / 100 + 1));
  var suffix = determineCentury(centuryStr);

  return centuryStr + suffix;
}

function determineCentury(century) {
  var lastNum = century.slice(-1);

  if (Number(century) >= 10 && Number(century) <= 20) {
    suffix = 'th';
  }

  switch (lastNum) {
    case '1': return 'st';
    case '2': return 'nd';
    case '3': return 'rd';
    default:  return 'th';
  }
}
//
// century(2000);        // '20th'
// century(2001);        // '21st'
// century(1965);        // '20th'
// century(256);         // '3rd'
// century(5);           // '1st'
// century(10103);       // '102nd'
// century(1052);        // '11th'
// century(1127);        // '12th'
// century(11201);       // '113th'


// Teddy's age

function randomBetween(min, max) {
  if (min > max) {
    var placeHolder = min;
    min = max;
    max = placeHolder;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var randomNumber = randomBetween(200, 20)


// Searching 101
// Algorithm:
// - Create a for loop to loop 5 times and prompt
// - Break out of loop to ask last time and test if includes

var numbers = [];

for (var i = 1; i <= 5; i++) {
  // numbers.push(prompt('Enter the ' + i + suffix(i) + ' number:'));
}

// var lastNum = prompt('Enter the last number:');
// var doesAppear = isIncluded(numbers, lastNum) ? 'does not appear' : 'appears';

// console.log('The number ' + lastNum + ' ' + doesAppear + ' in ' + numbers.join(', '));

function suffix(num) {
  switch (num) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default:  return 'th';
  }
}

function isIncluded(arr, val) {
  return arr.some(function(current, val) {
    return current > val;
  });
}


// Retirement
//
// var age = Number(prompt('What is your age?'));
// var retireAge = Number(prompt('At what age would you like to retire?'));
// var ageDifference = retireAge - age;
// var currentYear = new Date().getFullYear();
// var retireYear = currentYear + (retireAge - age);
// console.log("It's " + currentYear + '. You will retire in ' + retireYear + '.');
// console.log('You have only ' + ageDifference + ' years of work to go!');


// Palindrome

/* Algorithm:
  - every loop through the letters and test if they are the same, beginning and end
*/

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

function isRealPalindrome(string) {
  console.log(isPalindrome(string.toLowerCase().replace(/\W/g, '')));
}

function isPalindromicNumber(number) {
  console.log(isPalindrome(String(number)));
}



// Running Total
/*
Algorithm:
  - Map through the elements
  - Slice off the array at each element and reduce what has been added so far
*/

function runningTotal(array) {
  return array.map(function(value, index) {
    return array.slice(0, index + 1).reduce( (acc, val) => acc + val);
  });
}

// var answer = runningTotal([2, 5, 13]);             // [2, 7, 20]
// var answer1 = runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
// var answer2 = runningTotal([3]);                    // [3]
// var answer3 = runningTotal([]);                     // []


// Letter Swap

/*
Algorithm:
  - Split array and map through it
  - reverse the word and return it
*/

function swap(str) {
  return str.split(' ')
            .map(
              word => word.split('')
                          .reverse()
                          .join(''))
            .join(' ');
}

// var answer = swap('Oh what a wonderful day it is');    // 'hO thaw a londerfuw yad ti si'
// var answer1 = swap('Abcde');                            // 'ebcdA'
// var answer2 = swap('a');

// Letter Count 1

/*
Algorithm:
  - Reduce the string into an object
  - Each letter, set the object key to either 0 or the count, if it has one
  - increment the count by 1 every pass
  - return object
*/

function wordSizes(string) {
  if (string.length === 0) return {};
  var cleanString = string.replace(/[^a-z ]/ig, '');

  return cleanString.split(' ').reduce(function(object, word) {
    object[word.length] = (object[word.length] || 0);
    object[word.length]++;
    return object
  }, {});
}

// var answer = wordSizes('Four score and seven.');                       // { "3": 1, "4" : "1", "5": 1, "6": 1 }
// var answer1 = wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
// var answer2 = wordSizes('What\'s up doc?');                             // { "6": 1, "2": 1, "4": 1 }
// var answer3 = wordSizes('');
// var answer4 = wordSizes('Four score and seven.');                        // { "3": 1, "4": 1, "5": 2 }
// var answer5 = wordSizes('Hey diddle diddle, the cat and the fiddle!');   // { "3": 5, "6": 3 }
// var answer6 = wordSizes('What\'s up doc?');                              // { "5": 1, "2": 1, "3": 1 }
// var answer7 = wordSizes('');                                             // {}


// Cute Angles
/*
Algorithm:
  - Hour is first number rounded down
  - Min is the remainder decimal multipled by 60 and rounded down
  - sec is remainder of min multipled by 60 and rounded down.
*/

function dms(angle) {
  var sign = (angle < 0 ? '-' : '')
  angle = Math.abs(angle);

  var hour = Math.floor(angle);
  var min = pad(Math.floor(convert(angle)));
  var sec = pad(Math.floor(convert((angle % 1) * 60)));

  console.log(sign + hour + '\xB0' + min + "'" + sec + '"');
}

function convert(angle) {
  return (angle % 1) * 60;
}

function pad(num) {
  if (num < 10) {
    return '0' + num;
  } else {
    return String(num);
  }
}
//
// dms(30);        // 30°00'00"
// dms(76.73);     // 76°43'48"
// dms(254.6);     // 254°35'59"
// dms(93.034773); // 93°02'05"
// dms(0);         // 0°00'00"
// dms(360);       // 360°00'00" or 0°00'00"
// dms(-45.65);

// Combining array

function union(arr1, arr2) {
  var unionArr = arr1.slice();

  for (var i = 0; i < arr2.length; i++) {
    if (!unionArr.includes(arr2[i])) {
      unionArr.push(arr2[i]);
    }
  }

  return unionArr;
}


// union([1, 3, 5], [3, 6, 9]); // [1, 3, 5, 6, 9]
// union([1, 3], [3, 6, 9]); // [1, 3, 6, 9]
// union([1, 2, 3], [2, 3, 9]); // [1, 2, 3, 9]


// Halvsies

function halvsies(array) {
  var halfArrays = [];
  var half = Math.ceil(array.length / 2);
  halfArrays.push(array.slice(0, half));
  halfArrays.push(array.slice(half));
  return halfArrays;
}
//
// halvsies([1, 2, 3, 4])    // [[1, 2], [3, 4]]
// var answer = halvsies([1, 5, 2, 4, 3]) // [[1, 5, 2], [4, 3]]
// halvsies([5])             // [[5], []]
// halvsies([])              // [[], []]

// Find Duplicate

function findDup(array) {
  var remainder;
  var number;

  for (var i = 0; i < array.length; i++) {
    remainder = array.slice(i + 1);
    number = array[i];

    if (remainder.includes(array[i])) {
      return number;
    }
  }
}

// findDup([1, 5, 3, 1])                              // 1
// findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
//          38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
//          14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
//          78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
//          89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
//          41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
//          55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
//          85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
//          40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
//          7,  34, 57, 74, 45, 11, 88, 67,  5, 58])  // 73


// Combine Two lists

function interleave(arr1, arr2) {
  return arr1.reduce(function(array, element, index) {
    array.push(element, arr2[index]);
    return array;
  }, []);
}

// var answer = interleave([1, 2, 3], ['a', 'b', 'c']) // [1, 'a', 2, 'b', 3, 'c']


// Multiplicative Average

function showMultiplicativeAverage(array) {
  return (array.reduce((acc, val) => acc * val) / array.length).toFixed(3);
}

// var answer = showMultiplicativeAverage([3, 5])                 // '7.500'
// var answer1 = showMultiplicativeAverage([2, 5, 7, 11, 13, 17])  // '28361.667'


// Multiply List

function multiplyList(arr1, arr2) {
  return arr1.map((val, idx) => val * arr2[idx]);
}

// var answer = multiplyList([3, 5, 7], [9, 10, 11]) // [27, 50, 77]



// Digits list

function digitList(num) {
  return String(num).split('').map(Number);
}

// var answer = digitList(12345);       // [1, 2, 3, 4, 5]
// var answer1 = digitList(7);           // [7]
// var answer2 = digitList(375290);      // [3, 7, 5, 2, 9, 0]
// var answer3 = digitList(444);         // [4, 4, 4]


var vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck', 'motorcycle', 'motorcycle', 'car', 'truck'];

function countOccurrences(array) {
  var counts = array.reduce(function(object, car) {
    object[car] = (object[car] || 0) + 1;
    return object;
  }, {});

  Object.keys(counts).forEach(function(car) {
    console.log(car + ' => ' + counts[car]);
  });
}


// countOccurrences(vehicles);



// Array Average

function average(array) {
  return Math.floor(array.reduce((acc, val) => acc + val) / array.length);
}


// var answer = average([1, 5, 87, 45, 8, 8])    // 25
// var answer1 = average([9, 47, 23, 95, 16, 52]) // 40


// Double char 1

function repeater(string) {
  return string.split('').map(char => char.repeat(2)).join('');
}

// repeater('Hello')     // "HHeelllloo"
// repeater("Good job!") // "GGoooodd  jjoobb!!"
// repeater('')          // ''


// Double Constants

function doubleConsonants(string) {
  return string.replace(/([^aeiou0-9\s-;:,.'"?!])/gi, '$1$1');
}

// doubleConsonants('String')       // "SSttrrinngg"
// doubleConsonants('Hello-World!') // "HHellllo-WWorrlldd!"
// doubleConsonants('July 4th')     // "JJullyy 4tthh"
// doubleConsonants('')             // ""


// reversed numbers

function reversedNumber(num) {
  return Number(String(num).split('').reverse().join(''));
}

// reversedNumber(12345); // 54321
// reversedNumber(12213); // 31221
// reversedNumber(456);   // 654
// reversedNumber(12000); // 21 # Note that zeros get dropped!
// reversedNumber(1);     // 1


// Middle character

function centerOf(string) {
  var length = string.length;
  var subStrLength = 1;
  var halfway = Math.floor((length - 1) / 2);

  if (length % 2 === 0) {
    halfway--;
  }

  return string.substr(halfway, subStrLength);
}

// centerOf('I love ruby')    // 'e'
// centerOf('Launch School')  // ' '
// centerOf('Launch')         // 'un'
// centerOf('Launchschool')   // 'hs'
// centerOf('x')              // 'x'


// always return negative

function negative(num) {
  return num <= 0 ? num : -num;
}

// negative(5)  // -5
// negative(-3) // -3
// negative(0)  // -0


// Counting up

function sequence(num) {
  var array = [];
  for (var i = 1; i <= num; i++) {
    array.push(i);
  }

  return array;
}

// sequence(5) // [1, 2, 3, 4, 5]
// sequence(3) // [1, 2, 3]
// sequence(1) // [1]


// Name swapping

function swapName(name) {
  var nameArr = name.split(' ');

  return nameArr.pop() + ', ' + nameArr.join(' ');
}

// console.log(swapName('Joe John Roberts')); // 'Roberts, Joe'


// Sequence Count

/*
Algorithm:
  -
*/

function sequence(length, increment) {
  return seqArray = Array(length).fill(1).map((val, idx) => (val + idx) * increment);
}

// var answer = sequence(5, 1)       // [1, 2, 3, 4, 5]
// var answer1 = sequence(4, -7)      // [-7, -14, -21, -28]
// var answer2 = sequence(3, 0)       // [0, 0, 0]
// var answer3 = sequence(0, 1000000) // []


// Reverse it

function reverseWords(string) {
  return string.split(' ').map(function(word) {
    return word.length >= 5 ? word.split('').reverse().join('') : word;
  }).join(' ');
}

// var answer = reverseWords('Professional');          // lanoisseforP
// var answer1 = reverseWords('Walk around the block'); // Walk dnuora the kcolb
// var answer2 = reverseWords('Launch School');         // hcnuaL loohcS

// Alphabetical Numbers

/*
Algorithm:
  - Create constant object where turns number into string
  - Sort array
  - Base sort on comparing number strings together.
*/

var NUMBERS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
                'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
                'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ];

function alphabeticNumberSort(array) {
  return array.sort(numSort);
}

function numSort(idx1, idx2) {
  if (NUMBERS[idx1] < NUMBERS[idx2]) {
    return -1;
  } else if (NUMBERS[idx1] > NUMBERS[idx2]) {
    return 1;
  } else {
    return 0;
  }
}

// var answer = alphabeticNumberSort([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// // [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]


// Sum of Digits

// Algo: turn to string, split, map, reduce

function sum(num) {
  return String(num).split('').reduce((acc, val) => acc + Number(val), 0);
}

// var answer = sum(23);          // 5
// sum(496);         // 19
// sum(123456789);   // 45



// Multiply All Pairs

// Algo: Double loops, multiply each value and input into a new array, sort the array

function multiplyAllPairs(arr1, arr2) {
  var returnArr = [];
  arr1.forEach(function(outerNum) {
    arr2.forEach(function(innerNum) {
      returnArr.push(outerNum * innerNum);
    });
  });

  return returnArr.sort((num1, num2) => num1 - num2);
}

// var answer = multiplyAllPairs([2, 4], [4, 3, 1, 2]) // [2, 4, 4, 6, 8, 8, 12, 16]


// Sum of Sums

/*
Algorithm:
  - map through array and change values, reduce at end
*/

function sumOfSums(arr) {
  return arr.reduce(function(acc, val, idx) {
    return acc + arr.slice(0, idx + 1).reduce((acc, val) => acc + val);
  });
}

// var answer = sumOfSums([3, 5, 2])       // (3) + (3 + 5) + (3 + 5 + 2) # -> (21)
// sumOfSums([1, 5, 7, 3])    // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) # -> (36)
// sumOfSums([4])             // 4
// sumOfSums([1, 2, 3, 4, 5]) // 35


// Leading substrings

// Algorithm: break string into array, map array and return slice of array of current idx plus one.

function substringsAtStart(str) {
  return str.split('').map((char, idx, arr) => arr.slice(0, idx + 1).join(''));
}


// var answer = substringsAtStart('abc')   // ['a', 'ab', 'abc']
// var answer1 = substringsAtStart('a')     // ['a']
// var answer2 = substringsAtStart('xyzzy') // ['x', 'xy', 'xyz', 'xyzz', 'xyzzy']



// Sub Strings

/*
Algorithm:
  - create a return array
  - split string into array and iterate through it
  - Slice the array and iterate through that
  - push substrings to array
*/

function substrings(string) {
  var returnArr = [];

  string.split('').forEach(function(outerVal, outerIdx, outerArr) {
    outerArr.slice(outerIdx).forEach(function(innerVal, innerIdx, innerArr) {
      returnArr.push(innerArr.slice(0, innerIdx + 1).join(''));
    });
  });

  return returnArr;
}

// var answer = substrings('abcde');
// result
// [ 'a', 'ab', 'abc', 'abcd', 'abcde',
//   'b', 'bc', 'bcd', 'bcde',
//   'c', 'cd', 'cde',
//   'd', 'de',
//   'e' ]



// Palindromes

/*
Algorithm:
  - Use substrings method to get all possible substrings
  - filter them to just have Palindromes
  - return filter
*/

function palindromes(string) {
  var allSubstrings = substrings(string);
  allSubstrings = allSubstrings.filter(substr => substr.length > 1);

  return allSubstrings.filter(function(substr) {
    if (substr === substr.split('').reverse().join('')) {
      return true;
    }
  });
}


var answer = palindromes('abcd');  // []
var answer1 = palindromes('madam'); // ['madam', 'ada']
var answer2 = palindromes('hello-madam-did-madam-goodbye');
// result
// [ 'll', '-madam-', '-madam-did-madam-', 'madam', 'madam-did-madam', 'ada',
  // 'adam-did-mada', 'dam-did-mad', 'am-did-ma', 'm-did-m', '-did-', 'did',
  // '-madam-', 'madam', 'ada', 'oo' ]

var answer3 = palindromes('knitting cassettes');
// result
// [ 'nittin', 'itti', 'tt', 'ss', 'settes', 'ette', 'tt' ]



// Grocery list

/*
Algorithm:
  - Create a return array
  - Iterate through argument array and create for loop to push item into return array
  - return array
*/

function buyFruit(groceries) {
  var groceryList = [];

  groceries.forEach(function(item) {
    for (var i = 0; i < item[1]; i++) {
      groceryList.push(item[0]);
    }
  });

  return groceryList;
}


// buyFruit([['apples', 3], ['orange', 1], ['bananas', 2]]);
// result
// ['apples', 'apples', 'apples', 'orange', 'bananas','bananas']


// Transactions

/*
Algorithm:
  - filter transactions based on id number
*/


var transactions = [ {id: 101, movement: 'in', quantity: 5, },
                     {id: 105, movement: 'in', quantity: 10, },
                     {id: 102, movement: 'out', quantity: 17, },
                     {id: 101, movement: 'in', quantity: 12, },
                     {id: 103, movement: 'out', quantity: 15, },
                     {id: 102, movement: 'out', quantity: 15, },
                     {id: 105, movement: 'in', quantity: 25, },
                     {id: 101, movement: 'out', quantity: 18, },
                     {id: 102, movement: 'in', quantity: 22, },
                     {id: 103, movement: 'out', quantity: 15, },];

function transactionsFor(id, transactions) {
  return transactions.filter(object => object.id === id);
}


// var answer = transactionsFor(101, transactions);
// result
// [ { id: 101, movement: 'in', quantity: 5 },
//   { id: 101, movement: 'in', quantity: 12 },
//   { id: 101, movement: 'out', quantity: 18 }, ]

// Is Available

/*
Algorithm:
  - Use transactionsFor to get filtered results
  - reduce value of array into a value
  - test whether value is positive or negative
*/

function isItemAvailable1(id, transactions) {
  var quantity = transactionsFor(id, transactions).reduce(function(acc, transaction) {
    if (transaction.movement === 'in') {
      return acc + transaction.quantity;
    } else {
      return acc - transaction.quantity;
    }
  }, 0);

  return quantity > 0;
}

function isItemAvailable2(id, transactions) {
  var transactionsForItem = transactionsFor(id, transactions);
  var lastTransaction = transactionsForItem[transactionsForItem.length - 1];

  return lastTransaction.movement === 'in' && lastTransaction.quantity > 0;
}


// var answer = isItemAvailable1(101, transactions); // false
// var answer1 = isItemAvailable1(105, transactions); // true
// var answer2 = isItemAvailable1(103, transactions); // true
// var answera = isItemAvailable1(102, transactions); // true
//
// var answer3 = isItemAvailable2(101, transactions); // false
// var answer4 = isItemAvailable2(105, transactions); // true
// var answer5 = isItemAvailable2(103, transactions); // true
// var answerb = isItemAvailable2(102, transactions); // true


// Uppercase check

function isUppercase(string) {
  return !/[a-z]/.test(string);
}

// isUppercase('t')          // false
// isUppercase('T')          // true
// isUppercase('Four Score') // false
// isUppercase('FOUR SCORE') // true
// isUppercase('4SCORE!')    // true
// isUppercase('')           // true


// Delete vowels

function removeVowels(array) {
  return array.map(word => word.replace(/[aeiou]/gi, ''));
}
//
// removeVowels(['abcdefghijklmnopqrstuvwxyz']);             // ['bcdfghjklmnpqrstvwxyz']
// removeVowels(['green', 'YELLOW', 'black', 'white']);      // ['grn', 'YLLW', 'blck', 'wht']
// removeVowels(['ABC', 'AEIOU', 'XYZ']);                    // ['BC', '', 'XYZ']

// letterCaseCount

/*
Algorithm:
  - split string into array and reduce to object
  - if test matches uppercase, increase value of property
*/

function letterCaseCount(string) {
  var letterCount = { lowercase: 0, uppercase: 0, neither: 0};

  return string.split('').reduce(function(object, char) {
    if (/[a-z]/.test(char)) {
      object['lowercase']++;
    } else if (/[A-Z]/.test(char)) {
      object['uppercase']++;
    } else {
      object['neither']++;
    }

    return object;
  }, letterCount);
}


// letterCaseCount('abCdef 123') // { lowercase: 5, uppercase: 1, neither: 4 }
// letterCaseCount('AbCd +Ef')   // { lowercase: 3, uppercase: 3, neither: 2 }
// letterCaseCount('123')        // { lowercase: 0, uppercase: 0, neither: 3 }
// letterCaseCount('')           // { lowercase: 0, uppercase: 0, neither: 0 }


// Capitalize words

function wordCap(string) {
  var str = string.toLowerCase();
  return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}
//
// wordCap('four score and seven')    // 'Four Score And Seven'
// wordCap('the javaScript language') // 'The Javascript Language'
// wordCap('this is a "quoted" word') // 'This Is A "quoted" Word'


// Swap Case

function swapcase(string) {
  return string.replace(/([a-z])/g, '$11')
               .replace(/([A-Z])/g, char => char.toLowerCase())
               .replace(/([a-z]1)/g, pair => pair[0].toUpperCase());
}


// var answer = swapcase('CamelCase')         // 'cAMELcASE'
// var answer1 = swapcase('Tonight on XYZ-TV') // 'tONIGHT ON xyz-tv'

// Stagger Case

/*
Algorithm:
  - Split string into array, use boolean to tell whether uppercase or not
  - Join string back together
*/

function staggeredCase1(string) {
  var isUppercase = false;

  return string.split('').map(function(char) {
    if (/[a-z]/i) {
      isUppercase = !isUppercase;
      char = isUppercase ? char.toUpperCase() : char.toLowerCase();
    }

    return char;
  }).join('');
}

// var answer = staggeredCase('I Love Launch School!')     // 'I LoVe lAuNcH ScHoOl!'
// var answer1 = staggeredCase('ALL_CAPS')                  // 'AlL_CaPs'
// var answer2 = staggeredCase('ignore 77 the 444 numbers') // 'IgNoRe 77 ThE 444 NuMbErS'


// Staggered Caps

function staggeredCase(string) {
  var isUppercase = true;

  return string.split('').map(function(char) {
    if (/[a-z]/i.test(char)) {
      isUppercase = !isUppercase;
      char = isUppercase ? char.toUpperCase() : char.toLowerCase();
    }

    return char;
  }).join('');
}



// Word Lengths

function wordLengths(string) {
  var words = string ? string.split(' ') : [];
  return words.map(word => word + ' ' + word.length);
}

// wordLengths('cow sheep chicken');
// // result
// // ['cow 3', 'sheep 5', 'chicken 7']
//
// wordLengths('baseball hot dogs and apple pie');
// // result
// // ['baseball 8', 'hot 3', 'dogs 4', 'and 3', 'apple 5', 'pie 3']
//
// wordLengths('It ain\'t easy, is it?');
// // result
// // ['It 2', 'ain\'t 5', 'easy, 5', 'is 2', 'it? 3']
//
// wordLengths('Supercalifragilisticexpialidocious');
// // result
// // ['Supercalifragilisticexpialidocious 34']
//
// wordLengths('');
// // result
// []



//  Search word

var text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'

function searchWord1(word, text) {
  var regex = new RegExp('\\b' + word + '\\b', 'ig');
  return (text.match(regex) || []).length;
}

// var answer = searchWord('sed', text);   // 3
// var answer1 = searchWord('qui', text);



// Search word Part 2

function searchWord(word, text) {
  var regex = new RegExp('(\\b' + word + '\\b)', 'ig');
  return text.replace(regex, match => '**' + match.toUpperCase() + '**');
}

// var answer = searchWord('sed', text);   // 3
// var answer1 = searchWord('qui', text);


// Rotate Array part 1

/*
Write a function that rotates the first entry in an array to the end.
Return undefined if array is not passed in.

input: array
output: rotated array

data structure: array

Algorithm:
  - create a copy of the array
  - Shift out the front element and push it to the end
  - return array
*/

function rotateArray(array) {
  if (!Array.isArray(array)) {
    return undefined;
  } else if (array.length === 0) {
    return [];
  }

  return array.slice(1).concat(array[0]);
}

// rotateArray([7, 3, 5, 2, 9, 1])   // [3, 5, 2, 9, 1, 7]
// rotateArray(['a', 'b', 'c'])      // ['b', 'c', 'a']
// rotateArray(['a'])                // ['a']
// rotateArray([1, 'a', 3, 'c']);    // [ 'a', 3, 'c', 1 ]
// rotateArray([{a: 2}, [1, 2], 3]); // [ [1, 2], 3, {a: 2} ]
// rotateArray([])                   // []
//
// // return undefined if the argument is not an array
// rotateArray();                    // undefined
// rotateArray(1);                   // undefined
//
//
// // the input array is not mutated
// x = [1, 2, 3, 4]
// rotateArray(x)                  // [2, 3, 4, 1]
// console.log(x)                  // [1, 2, 3, 4]

// Part 2

/*
input: 2 numbers, a big number and an index from the right to swap
output: rotated number

Write a function that rotates the last n numbers. Rotate the first element to the right

data structure: array

Algorithm:
  - Turn number into string and split it into an array.
  - Split array in two parts depending on the location, rotate it and combine it again.
  - Join it together and turn back into number
*/

function rotateRightmostDigits(num, idx) {
  var arrString = String(num).split('');
  return Number(
          arrString.slice(0, -idx)
                   .concat(
                     rotateArray(
                       arrString.slice(-idx)
                     )
                   ).join('')
         );
}
//
// var answer = rotateRightmostDigits(735291, 1) // 735291
// var answer1 = rotateRightmostDigits(735291, 2) // 735219
// var answer2 = rotateRightmostDigits(735291, 3) // 735912
// var answer3 = rotateRightmostDigits(735291, 4) // 732915
// var answer4 = rotateRightmostDigits(735291, 5) // 752913
// var answer5 = rotateRightmostDigits(735291, 6) // 352917

// Part 3

function maxRotation(number) {
  var length = String(number).length;
  for (var i = length; i >= 1; i--) {
    number = rotateRightmostDigits(number, i);
  }

  return number;
}

// maxRotation(735291)        // 321579
// maxRotation(3)             // 3
// maxRotation(35)            // 53
// maxRotation(105)           // 15 # the leading zero gets dropped
// maxRotation(8703529146)    // 7321609845



// Mini Lang

/*
Write a function that takes a string of commands and executes them

input: string
output: register number if print command is there

Data-structure: array

Algorithm:
  - Split string by space. Execute commands.
  - switch statement
*/

function minilang(commands) {
  var register = 0;
  var stack = [];

  commands.split(' ').forEach(function(command) {
    register = interpret(command, register, stack);
  });

  return undefined;
}

function interpret(command, register, stack) {
  switch(command) {
    case 'PRINT':
      console.log(register);
      break;
    case 'PUSH':
      stack.push(register);
      break;
    case 'ADD':
      register += stack.pop();
      break;
    case 'SUB':
      register -= stack.pop();
      break;
    case 'MULT':
      register *= stack.pop();
      break;
    case 'DIV':
      register = Math.round(register / stack.pop());
      break;
    case 'MOD':
      register = Math.round(register % stack.pop());
      break;
    case 'POP':
      register = stack.pop();
      break;
    default:
      register = Number(command);
  }

  return register;
}

// minilang('PRINT')
// // 0
//
// minilang('5 PUSH 3 MULT PRINT')
// // 15
//
// minilang('5 PRINT PUSH 3 PRINT ADD PRINT')
// // 5
// // 3
// // 8
//
// minilang('5 PUSH POP PRINT')
// // 5
//
// minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT')
// // 5
// // 10
// // 4
// // 7
//
// minilang('3 PUSH PUSH 7 DIV MULT PRINT ')
// // 6
//
// minilang('4 PUSH PUSH 7 MOD MULT PRINT ')
// // 12
//
// minilang('-3 PUSH 5 SUB PRINT')
// // 8
//
// minilang('6 PUSH')
// // (nothing printed;


// Word to Digit

/*
Write a function that converts numbers to actual number

input: string
output: string

Data-structure: array

Algorithm:
  - remove anything not a word or letter
  - iterate through array and switch the words for the number
*/

function wordToDigit(string) {
  var NUMBERS = { 'zero': '0', 'one': '1', 'two': '2',
                  'three': '3', 'four': '4', 'five': '5',
                  'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', }
  var regex = new RegExp('(' + Object.keys(NUMBERS).join('|') + ')', 'ig');

  return string.replace(regex, word => NUMBERS[word]);
}

// var answer = wordToDigit('Please call me at five five five one two three four. Thanks.');
// //'Please call me at 5 5 5 1 2 3 4. Thanks.'



// Recursion Fib

/*
Create a recursive function for the fibonacci sequence

input: index of fib sequence
output: value of that index
*/

function fibonacci(number, memo = {}) {
  if (number <= 2) return 1;

  if (memo[number]) {
    return memo[number];
  } else {
    memo[number] = fibonacci(number - 1, memo) + fibonacci(number - 2, memo);
    return memo[number];
  }
}

// var answer = fibonacci(1)   // 1
// var answer1 = fibonacci(2)   // 1
// var answer2 = fibonacci(3)   // 2
// var answer3 = fibonacci(4)   // 3
// var answer4 = fibonacci(5)   // 5
// var answer5 = fibonacci(12)  // 144
// var answer6 = fibonacci(20)  // 6765
// var answer7 = fibonacci(20)   // 6765
// var answer8 = fibonacci(50)   // 12586269025
// var answer9 = fibonacci(100)  // 354224848179261915075


// Lettercase percentage ratione

/*
create a function that counts the number of lowercase letters
or uppercase letters or neither and returns an object

input: string
output: object

Data-structure = string/object

Algorithm:
  - Use regex to match and count the matches
  - return matches in object
*/

function letterPercentages(string) {
  var lower = (string.match(/([a-z])/g) || []).length;
  var upper = (string.match(/([A-Z])/g) || []).length;
  var neither = (string.match(/([^A-Za-z])/g) || []).length;
  var length = string.length;

  return {
    'lowercase': ((lower / length) * 100).toFixed(2),
    'uppercase': ((upper / length) * 100).toFixed(2),
    'neither': ((neither / length) * 100).toFixed(2),
  };
}

// var answer = letterPercentages('abCdef 123') // { lowercase: 50.00, uppercase: 10.00, neither: 40.00 }
// var answer1 = letterPercentages('AbCd +Ef')   // { lowercase: 37.50, uppercase: 37.50, neither: 25.00 }
// var answer2 = letterPercentages('123')        // { lowercase: 0.00, uppercase: 0.00, neither: 100.00 }


// Triangle Sides

/*
Create a function that takes three side lengths and determines the type of triangle

input: side lengths
output: string

Data-structure: array

Algorithm:
  - get the total of the sides and compare against longest side to see if invalid
  - check if every side is the same for equilateral
  - do for loop to see how many sides are the same
*/

function triangle(s1, s2, s3) {
  var sides = [s1, s2, s3].sort((a, b) => a - b);

  if (sides[2] > (sides[0] + sides[1]) || sides[0] <= 0) {
    return 'invalid';
  } else if (sides.every(side => side === sides[0])) {
    return 'equilateral';
  } else if (sides[0] === sides[1] || sides[1] === sides[2]) {
    return 'isosceles';
  } else {
    return 'scalene';
  }
}

// var answer = triangle(3, 3, 3)   // equilateral
// var answer1 = triangle(3, 3, 1.5) // isosceles
// var answer2 = triangle(3, 4, 5)   // scalene
// var answer3 = triangle(0, 3, 3)   // invalid
// var answer4 = triangle(3, 1, 1)   // invalid

function triangle(a1, a2, a3) {
  var sum = a1 + a2 + a3;
  var angles = [a1, a2, a3].sort((a, b) => a - b);

  if (sum !== 180 || angles[0] <= 0) {
    return 'invalid';
  } else if (angles.includes(90)) {
    return 'right';
  } else if (angles[2] > 90) {
    return 'obtuse';
  } else {
    return 'acute';
  }
}

// var answer = triangle(60, 70, 50)   // acute
// var answer1 = triangle(30, 90, 60)   // right
// var answer2 = triangle(120, 50, 10)  // obtuse
// var answer3 = triangle(0, 90, 90)    // invalid
// var answer4 = triangle(50, 50, 50)   // invalid


// Unlucky Days

/*
Create a function that counts the number of friday the 13ths in
a given year, which is passed in

input: year, number
output: number, amount of Friday the 13ths

Data-structure: Date

Algorithm:
  - start count at 0
  - For loop through all 12 months and check to see if they are fridays
    - See if the day === 5
  - return count
*/

function fridayThe13ths(year) {
  var count = 0;
  var date;

  for (var i = 0; i < 12; i++) {
    date = new Date(year, i, 13);
    if (date.getDay() === 5) {
      count++;
    }
  }

  return count;
}

// var answer = fridayThe13ths(2015) // 3
// var answer1 = fridayThe13ths(1986) // 1


// Next Featured Number

/*
Create a function the returns the next featured number.

input: number
output: next featured number

Algorithm:
  - Divide number by 7 and round down
  - while loop up the number until featured number works
  - return featured number
*/

function featured(number) {
  if (String(number).length > 10) return 'No more featured numbers.';

  var multiple = Math.floor(number / 7) + 1;
  multiple += multiple % 2 === 0 ? 1 : 0;

  while (!isFeatured(multiple * 7)) {
    multiple += 2;
  }

  return multiple * 7;
}

function isFeatured(number) {
  if (number % 2 === 0) return false;

  var stringNum = String(number).split('');
  var current;

  for (var i = 0; i < stringNum.length; i++) {
    current = stringNum[i];
    if (stringNum.slice(i + 1).includes(current)) {
      return false;
    }
  }

  return true;
}

// featured(12)        // 21
// featured(20)        // 21
// featured(21)        // 35
// featured(997)       // 1029
// featured(1029)      // 1043
// featured(999999)    // 1023547
// featured(999999987) // 1023456987


// Sum Square

function sumSquareDifference(number) {
  var numArray = new Array(number).fill(1).map((val, idx) => idx + 1);
  return sumSquare(numArray) - squareSum(numArray);
}

function sumSquare(numArray) {
  return numArray.reduce((acc, val) => acc + val) ** 2;
}

function squareSum(numArray) {
  return numArray.reduce((acc, val) => acc + (val ** 2), 0);
}

var answer = sumSquareDifference(3)    // 22
// -> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
var answer1 = sumSquareDifference(10)   // 2640
var answer2 = sumSquareDifference(1)    // 0
var answer3 = sumSquareDifference(100)  // 25164150



// Bubble Sort

/*
Algorithm:
  - while loop that keeps track of needToSort
  -
*/

function bubbleSort(array) {
  var needToSort;

  do {
    needToSort = false;

    for (var i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        swapPlaces(array, i);
        needToSort = true;
      }
    }
  } while (needToSort)

  return array;
}

function swapPlaces(array, idx) {
  var placeHolder = array[idx];
  array[idx] = array[idx + 1];
  array[idx + 1] = placeHolder;
}

// var array = [5, 3];
// bubbleSort(array);
// console.log(array);     // [3, 5]
//
// array = [6, 2, 7, 1, 4]
// bubbleSort(array);
// console.log(array);     // [1, 2, 4, 6, 7]
//
// array = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
// bubbleSort(array);
// console.log(array);



// Madlibs

/*
Create a function that takes a text template and adds random words to it

Data-structure: String and array

input: text template
output: text in string form

Algorithm:
  - Create templates that use empty words such as 'noun' and verb
    - Use words such as 'noun', 'adverb', 'adject'
  - Pass in template. Replace all template words with real noun or verbs
    - While loop that tests a regex expression.
      - As long as it still finds the words "noun", 'verb', etc. Keeps looping
    - Have arrays that contain words to replace the template words
    - Use a string replace method with /(noun|verb|adjective|adverb/)
  - return the string
*/
var template1 = 'The adjective brown noun adverb \n' +
                      'verb the adjective yellow \n' +
                      'noun, who adverb verb his \n' +
                      'noun and looks around.';

var template2 = 'The noun verb the noun\'s noun.'


function madlibs(template) {
  var wordTypes = {
    adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
    noun: ['fox', 'dog', 'head', 'leg', 'tail'],
    verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
    adverb: ['easily', 'lazily', 'noisily', 'excitedly'],
  };

  Object.keys(wordTypes).forEach(function(type) {
    var regex = new RegExp(type);

    while (regex.test(template)) {
      template = template.replace(regex, random(wordTypes[type]));
    }
  });

  return template
}

function random(words) {
  var length = words.length;
  var randIdx = Math.floor(Math.random() * length);

  return words[randIdx];
}


// madlibs(template1);
// madlibs(template1);
// madlibs(template2);
// madlibs(template2);



// Transpose 3 X 3

function transpose(array) {
  return array[0].map(function(col, columnIdx) {
    return array.map(function(row) {
      return row[columnIdx];
    });
  });
}

var matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

var matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8]
];

// var newMatrix = transpose(matrix);
//
// console.log(newMatrix); // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
// console.log(matrix);
//
// var answer = transpose([[1, 2, 3, 4]]);       // [[1], [2], [3], [4]]
// var answer1 = transpose([[1], [2], [3], [4]]); // [[1, 2, 3, 4]]
// var answer2 = transpose([[1]]);                // [[1]]
// var answer3 = transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
//
//
// function transpose(matrix) {
//   var transposed = [];
//   var newRowsCount = matrix[0].length;
//
//   for (var row = 0; row < newRowsCount; row++) {
//     transposed.push([]);
//   }
//
//   for (var row = 0, rows = matrix.length; row < rows; row++) {
//     for (var col = 0, cols = matrix[row].length; col < cols; col++) {
//       transposed[col].push(matrix[row][col]);
//     }
//   }
//
//   return transposed;
// }
//
// function transpose(matrix) {
//   var transposed = [];
//   var newRowsCount = matrix[0].length;
//
//   for (var row = 0; row < newRowsCount; row++) {
//     transposed.push([]);
//   }
//
//   for (var row = 0, rows = matrix.length; row < rows; row++) {
//     for (var col = 0, cols = matrix[row].length; col < cols; col++) {
//       transposed[col].push(matrix[row][col]);
//     }
//   }
  //
  // return transposed;
// }

function rotate90(array) {
  array = array.reverse();

  return array[0].map(function(col, columnIdx) {
    return array.map(function(row) {
      return row[columnIdx];
    });
  });
}

// var newMatrix1 = rotate90(matrix1);
// var newMatrix2 = rotate90(matrix2);
// var newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));
//
// console.log(newMatrix1); // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
// console.log(newMatrix2); // [[5, 3], [1, 7], [0, 4], [8, 2]]
// console.log(newMatrix3); // matrix2


// Merge Sort

// Create a function that merges two sorted arrays into a single sorted array
// input: two sorted arrays
// output: one sorted array

// Data-structure: array

/*
Algorithm:
  - Loop through both arrays at same time
    - Have two counters that keep track of the index at each array.
    - While loop that keeps going until one counter exceeds length
  - Compare the values at each array index and push lower value to new array
  - Once while loop breaks, check to see an array has any values left and concat to new array
  - return new sorted array
*/

// function merge(arr1, arr2) {
//   var count1 = 0;
//   var count2 = 0;
//   var mergeList = [];
//   var lesser;
//   var leftOver;
//
//   while (count1 < arr1.length && count2 < arr2.length) {
//     if (arr1[count1] < arr2[count2]) {
//       lesser = arr1[count1];
//       count1++;
//     } else {
//       lesser = arr2[count2];
//       count2++;
//     }
//
//     mergeList.push(lesser);
//   }
//
//   leftOver = count1 < arr1.length ? arr1.slice(count1) : arr2.slice(count2);
//   return mergeList.concat(leftOver);
// }

// var answer = merge([1, 5, 9], [2, 6, 8]) // [1, 2, 5, 6, 8, 9]
// var answer1 = merge([1, 1, 3], [2, 2])    // [1, 1, 2, 2, 3]
// var answer2 = merge([], [1, 4, 5])        // [1, 4, 5]
// var answer3 = merge([1, 4, 5], [])        // [1, 4, 5]


function mergeSort(array) {
  if (array.length < 2) return array;

  var half = Math.floor(array.length / 2);
  var firstHalf = mergeSort(array.slice(0, half));
  var secondHalf = mergeSort(array.slice(half));

  return merge(firstHalf, secondHalf);
}

function merge(array1, array2) {
  var copy1 = array1.slice();
  var copy2 = array2.slice();
  var result = [];

  while (copy1.length > 0 && copy2.length > 0) {
    result.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
  }

  return result.concat(copy1.length === 0 ? copy2 : copy1);
}

// var answer = mergeSort([9, 5, 7, 1]);                // [1, 5, 7, 9]
// var answer1 = mergeSort([5, 3]);                      // [3, 5]
// var answer2 = mergeSort([6, 2, 7, 1, 4]);             // [1, 2, 4, 6, 7]
// var answer3 = mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']);
// // ['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler']
// var answer4 = mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]);
// // [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]


// Binary Search
/*
Create a function that uses binary search to find if a value is in an ordered list
Binary search:
  - Go to half way point of list and compare that value to search value
    - If equals, end search
    - If greater than, discard lower half and repeat with upper half
    - if lower than, discard upper half and repeat with lower half;
  - If value does not exist, return -1

  Data-structure: array

  inputs: array, search item
  output: index of search item

  - Recursive

Algorithm:
  - find halfway index of list and compare that value to search item;
  - If greater, slice list in half and do recursion on top half
  - Do opposite if lower
  - If array size is 1 and the values don't equal, return -1
*/

function binarySearch(array, searchItem, start = 0) {
  if (array.length === 1 && array[0] !== searchItem) return -1;

  var halfIdx = Math.floor(array.length / 2);
  var currentIdx = start + halfIdx;
  var halfArr;

  if (array[halfIdx] > searchItem) {
    halfArr = array.slice(0, halfIdx);
    return binarySearch(halfArr, searchItem, currentIdx);
  } else if (array[halfIdx] < searchItem) {
    halfArr = array.slice(halfIdx);
    return binarySearch(halfArr, searchItem, currentIdx);
  } else {
    return currentIdx;
  }
}


// var answer = binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77);                                // -1
// var answer1 = binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89);                                // 7
// var answer2 = binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'); // -1
// var answer3 = binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'); // 6



// Strings Mix

/*
Description:
  - Create a function that takes two strings and produces a string
    displaying the max number of lower case letters in each string greater than 1.

Input: Two strings
Output: One string with max letters

Data-structure: object

Algorithm:
  - remove all letters not lowercase, split into array, sort by character code. join and match repeating characters
  - array of arrays with string of repeat characters and num of array
*/

function mix(s1, s2) {
  var ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
  var repeatedChars = [];
  var currentChars1;
  var currentChars2;
  var length1;
  var length2
  var regex;
  var max;

  s1 = transform(s1, '1');
  s2 = transform(s2, '2');

  ALPHABET.split('').forEach(function(char) {
    regex = new RegExp(char);
    currentChars1 = s1.filter(chars => regex.test(chars[1]));
    currentChars2 = s2.filter(chars => regex.test(chars[1]));
    currentChars1 = (currentChars1[0] || []);
    currentChars2 = (currentChars2[0] || []);

    if (currentChars1.length === 0 && currentChars2.length === 0) {
      return;
    } else if (currentChars1.length === 0) {
      max = currentChars2;
    } else if (currentChars2.length === 0) {
      max = currentChars1;
    } else if (currentChars1[1].length < currentChars2[1].length) {
      max = currentChars2;
    } else if (currentChars2.length === 0 || currentChars1[1].length > currentChars2[1].length) {
      max = currentChars1;
    } else {
      max = ['=', currentChars1[1]];
    }

    repeatedChars.push(max);
  });

  return repeatedChars.sort(function(a, b) {
    var n = b[1].length - a[1].length;
    if (n !== 0) {
      return n;
    } else if (a[0] !== '=' && b[0] !== '=' || a[0] === b[0]) {
      return a[1][0].charCodeAt() - b[1][0].charCodeAt();
    } else {
      return (+b[0] || 0) - (+a[0] || 0);
    }
  }).map(string => string.join(':')).join('/');
}

function transform(s, num) {
  return s.split('')
          .sort((a, b) => a.charCodeAt() - b.charCodeAt())
          .join('')
          .match(/([a-z])\1+/g)
          .map(str => [num, str]);

}

s1 = "my&friend&Paul has heavy hats! &"
s2 = "my friend John has many many friends &"
var answer = mix(s1, s2) // --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
var answer1 = mix(s1, s2) // --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1="Are the kids at home? aaaaa fffff"
s2="Yes they are here! aaaaa fffff"
var answer2 = mix(s1, s2) // --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"
