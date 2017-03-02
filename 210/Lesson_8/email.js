function isValidEmail(email) {
  var local = email.split('@')[0];
  var domain = email.split('@')[1];
  var localValid = !!local.match(/^([a-z0-9])+$/i);
  var domainValid = !!domain.match(/^([a-z]+\.)+([a-z]{2,4})$/i);

  console.log(localValid && domainValid);
}

var answer = isValidEmail('Foo@baz.com.ph');          // returns true
isValidEmail('Foo@mx.baz.com.ph');       // returns true
isValidEmail('foo@baz.com');             // returns true
isValidEmail('foo@baz.ph');              // returns true
isValidEmail('HELLO123@baz');            // returns false
isValidEmail('foo.bar@baz.to');          // returns false
isValidEmail('foo@baz.');                // returns false
isValidEmail('foo_bat@baz');             // returns false
isValidEmail('foo@bar.a12');             // returns false
isValidEmail('foo_bar@baz.com');         // returns false
isValidEmail('foo@bar.....com');
