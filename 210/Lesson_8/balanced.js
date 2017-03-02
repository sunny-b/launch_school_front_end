function isBalanced(string) {
  var parenthesesCount = 0;

  for(var i = 0; i < string.length; i++) {
    if (string[i] === ')') {
      parenthesesCount--;
    } else if (string[i] === '(') {
      parenthesesCount++;
    } else {
      continue;
    }

    if (parenthesesCount < 0) {
      console.log(false);
      return;
    }
  }

  console.log(parenthesesCount === 0);
}

isBalanced('What (is) this?');        // true
isBalanced('What is) this?');         // false
isBalanced('What (is this?');         // false
isBalanced('((What) (is this))?');    // true
isBalanced('((What)) (is this))?');   // false
isBalanced('Hey!');                   // true
isBalanced(')Hey!(');                 // false
isBalanced('What ((is))) up(');
