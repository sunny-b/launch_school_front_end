var firstName = "Sunny"
var lastName = "Beatteay"
var fullName = firstName + " " + lastName

console.log(fullName);
console.log(firstName.concat(lastName));
console.log(fullName.split(' '));

var language = 'JavaScript';
var idx = language.indexOf('S');

console.log(idx);
var charCode = language.charCodeAt(idx);

console.log(charCode);
console.log(String.fromCharCode(charCode));
console.log(language.lastIndexOf('a'));

var a = 'a';
var b = 'b';

console.log(a > b);
b = 'B';

console.log(a > b);

var aIndex = language.indexOf('a');
var vIndex = language.indexOf('v');

console.log(language.substr(aIndex, 4));
console.log(language.substr(vIndex, 4));
console.log(language.substring(aIndex, 4));
console.log(language.substring(vIndex, 4));

var fact1 = 'JavaScript is fun';
var fact2 = 'Kids like it too';
var compoundSentence = fact1 + ' and ' + fact2.toLowerCase();

console.log(compoundSentence);

console.log(fact1[0], fact2[0])

var pi = 22 / 7;
console.log(pi.toString().lastIndexOf('14'));

var boxNumber = (356).toString();
console.log(boxNumber);

boxNumber = parseInt(boxNumber, 10);
console.log(typeof boxNumber);
boxNumber = String(boxNumber);
console.log(typeof boxNumber);

var name = prompt('What is your name?');

if (name.slice(-1) === '!') {
  console.log(yell(name));
} else {
  console.log(greet(name));
}

function yell(name) {
  return "HELLO " + name.toUpperCase() + " WHY ARE WE SCREAMING?";
}

function greet(name) {
  return "Hello " + name + '.';
}
