function reverse(string) {
  var newStringArr = [];

  string.split('').forEach(function(char) {
    newStringArr.unshift(char);
  });

  return newStringArr.join('');
}

console.log(reverse('hello'));
console.log(reverse('The quick brown fox'));
