function checkSum(string) {
  var cleanArr;
  var reversedNumArr;
  var doubledArr;
  var sum;
  var doubled;

  cleanArr = string.replace(/\D/g, '').split('');
  reversedNumArr = cleanArr.reverse();

  doubledArrSum = reversedNumArr.reduce(function(acc, value, index) {
    value = Number(value);

    if (index % 2 === 0) {
      return acc + value;
    } else {
      doubled = value * 2;
      doubled = (doubled >= 10 ? doubled - 9 : doubled);
      return acc + doubled;
    }
  }, 0);

  return isValidLuhn(doubledArrSum);
}

function isValidLuhn(sum) {
  return sum % 10 === 0;
}


function checkDigit(string) {
  var cleanArr;
  var reversedNumArr;
  var doubledArrSum;
  var endDigit;

  if (checkSum(string)) { return string }

  cleanArr = string.replace(/\D/g, '').split('');
  reversedNumArr = cleanArr.reverse().map(Number);

  doubledArrSum = reversedNumArr.reduce(function(acc, value, index) {
    if (index % 2 === 0) {
      doubled = value * 2;
      doubled = (doubled >= 10 ? doubled - 9 : doubled);
      return acc + doubled;
    } else {
      return acc + value;
    }
  }, 0);

  endDigit = 10 - (doubledArrSum % 10);

  return string + endDigit;
}

console.log(checkSum('1111'));
console.log(checkSum('8763'));
console.log(checkDigit('111'));
console.log(checkSum(checkDigit('111')));
console.log(checkDigit('876')); // 8763
console.log(checkSum(checkDigit('876')));
console.log(checkDigit('1111'));
