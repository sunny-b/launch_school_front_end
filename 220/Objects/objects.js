// var me = {
//   firstName: 'Jane',
//   lastName: 'Doe',
// };
//
// var me = {};
// me.firstName = 'Jane';
// me.lastName = 'Doe';
//
// function fullName(person) {
//   console.log(person.firstName + ' ' + person.lastName);
// }
//
// // fullName(me);
//
// var friend = {
//   firstName: 'John',
//   lastName: 'Smith',
// };
//
// var mother = {
//   firstName: 'Arlette',
//   lastName: 'Beatteay',
// };
//
// var father = {
//   firstName: 'Ronald',
//   lastName: 'Beatteay',
// };
//
//
// var collection = [];
// collection.push(me);
// collection.push(friend);
// collection.push(mother);
// collection.push(father);
//
// function rollCall() {
//   this.collection.forEach(this.fullName);
// }
//
// var people = {
//   lastIndexUsed: 0,
//   collection: [],
//   fullName: fullName,
//   rollCall: rollCall,
//   add: function(person) {
//     if (this.isInvalidPerson(person)) return;
//     person.ID = this.lastIndexUsed;
//     this.lastIndexUsed++;
//     this.collection.push(person);
//   },
//   getIndex: function(person) {
//     var index = -1;
//     this.collection.forEach(function(compare, i) {
//       if (compare.ID === person.ID) {
//         index = i;
//       }
//     });
//
//     return index;
//   },
//   remove: function(person) {
//     if (this.isInvalidPerson(person)) return;
//
//     var index = this.getIndex(person);
//     if (index === -1) return;
//
//     this.collection.splice(index, 1);
//   },
//   isInvalidPerson: function(person) {
//     return typeof person.firstName !== 'string' ||
//            typeof person.lastName !== 'string';
//   },
//   get: function(person) {
//     if (this.isInvalidPerson(person)) return;
//
//     return this.collection[this.getIndex(person)];
//   },
//   update: function(person) {
//     if (this.isInvalidPerson(person)) return;
//
//     var existingPersonId = this.getIndex(person);
//     if (existingPersonId === -1) {
//       this.add(person);
//     } else {
//       this.collection[existingPersonId] = person;
//     }
//   },
// };
//
// people.add(me);
// people.add(friend);
// people.add(mother);
// people.add(father);
// people.rollCall();



// Invoices

// var invoices = {
//   unpaid: [],
//   paid: [],
//   add: function(client, invoice) {
//     this.unpaid.push({ name: client, amount: invoice });
//   },
//   totalDue: function() {
//     return this.unpaid.reduce((total, invoice) => total + invoice.amount, 0);
//   },
//   payInvoice: function(client) {
//     var newUnpaid = [];
//     var paid = this.paid;
//
//     this.unpaid.forEach(function(invoice) {
//       if (invoice.name === client) {
//         paid.push(invoice);
//       } else {
//         newUnpaid.push(invoice);
//       }
//     });
//
//     this.unpaid = newUnpaid;
//   },
// };
//
// invoices.add('Due North Development', 250);
// invoices.add('Moonbeam Interactive', 187.50);
// invoices.add('Slough Digital', 300);
// var answer = invoices.totalDue();
//
// invoices.totalPaid = function() {
//   return this.paid.reduce((total, invoice) => total + invoice.amount, 0);
// };
//
// invoices.payInvoice('Due North Development');
// invoices.payInvoice('Slough Digital');
// console.log(invoices.totalPaid());
// console.log(invoices.totalDue());
//



// Object functions

function makeCar(accRate, brakeRate) {
  return {
    speed: 0,
    rate: accRate,
    slow: brakeRate,
    accelerate: function() {
      this.speed += this.rate;
    },
    brake: function() {
      this.speed -= this.slow;
      this.speed = (this.speed < 0 ? 0 : this.speed);
    },
  };
}

var sedan = makeCar(8, 6);
//
// sedan.accelerate();
// console.log(sedan.speed);
// sedan.brake();
// console.log(sedan.speed);
// sedan.brake();
// console.log(sedan.speed);


function makeCounterLogger(number) {
  return function(limit) {
    if (limit > number) {
      for (var i = number; i <= limit; i++) {
        console.log(i);
      }
    } else {
      for (var i = number; i >= limit; i--) {
        console.log(i);
      }
    }
  }
}
//
// var countLog = makeCounterLogger(5);
// countLog(8);
// countLog(2);


function makeList() {
  return {
    todos: [],
    add: function(todo) {
      this.todos.push(todo);
      console.log(todo + ' added!');
    },
    list: function() {
      if (this.todos.length === 0) {
        console.log('There are no items in the list');
      } else {
        this.todos.forEach(item => console.log(item));
      }
    },
    remove: function(todo) {
      var indexOfTodo = this.todos.indexOf(todo);
      this.todos.splice(indexOfTodo, 1);
      console.log(todo + ' removed!');
    },
  }
}


// Exercises
// 1).

function makeMultiplierLister(multiple) {
  return function() {
    var multiples = multiple;
    while (multiples < 100) {
      console.log(multiples);
      multiples += multiple;
    }
  }
}
//
// var lister = makeMultiplierLister(13);
// lister();

var total = 0;

function add(num) {
  total += num;
  console.log(total);
}

function subtract(num) {
  total -= num;
  console.log(total);
}
//
// add(1);
// add(42);
// subtract(39);
// add(6);

function later(func, arg) {
  return function() {
    func(arg);
  }
}

// var logWarning = later(console.log, 'The system is shutting down!');
// logWarning();


function makeList() {
  var todos = [];

  return {
    add: function(todo) {
      todos.push(todo);
      console.log(todo + ' added!');
    },
    list: function() {
      if (todos.length === 0) {
        console.log('There are no items in the list');
      } else {
        todos.forEach(item => console.log(item));
      }
    },
    remove: function(todo) {
      var indexOfTodo = todos.indexOf(todo);
      todos.splice(indexOfTodo, 1);
      console.log(todo + ' removed!');
    },
  }
}
//
// var list = makeList();
// list.add('peas');
// list.list();
// list.add('corn');
// list.list();
// list.remove('peas');
// list.list();
// list.todos;


// Banking App


//
// var account = makeAccount();
// account.deposit(15);
// console.log(account.balance);
// var otherAccount = makeAccount();
// console.log(otherAccount.balance);

function makeBank() {
  var accounts = [];

  function makeAccount(number) {
    var transactions = [];
    var balance = 0;

    return {
      deposit: function(amount) {
        balance += amount;
        transactions.push({ type: 'deposit', amount: amount });
        return amount;
      },
      withdraw: function(amount) {
        balance -= amount;
        amount = (amount < 0 ? 0 : amount);
        transactions.push({ type: 'withdrawal', amount: amount});
        return amount;
      },
      balance: function() {
        return balance;
      },
      transactions: function() {
        return transactions;
      },
      number: function() {
        return number;
      },
    };
  }

  return {
    openAccount: function() {
      var number = accounts.length + 101;
      var account = makeAccount(number);
      accounts.push(account);
      return account;
    },
    transfer: function(source, destination, amount) {
      return destination.deposit(source.withdraw(amount));
    },
  };
}
//
// var bank = makeBank();
// var account = bank.openAccount();
// console.log(account.balance());
//
// console.log(account.deposit(17));
//
// var secondAccount = bank.openAccount();
// console.log(secondAccount.number());
//
// console.log(account.transactions());

function makeAddN(number) {
  return function(add) {
    return add + number;
  }
}

function greet(phrase, name) {
  var capitalized = phrase[0].toUpperCase() + phrase.slice(1);
  console.log(capitalized + ', ' + name + '!');
}

function partial(func, arg1) {
  return function(arg2) {
    func(arg1, arg2);
  }
}


// Interval Exercises
//
// setTimeout(function() { // 1
//   console.log("Once");  // 5
// }, 1000);
// setTimeout(function() { // 2
//   console.log("upon");  // 6
// }, 3000);
// setTimeout(function() { // 3
//   console.log("a");     // 7
// }, 2000);
// setTimeout(function() { // 4
//   console.log("time");  // 8
// }, 4000);
//
//
// setTimeout(function() {
//   setTimeout(function() {
//     q();                   // 12
//   }, 15);
//
//   d();                     // 7
//
//   setTimeout(function() {  // 8
//     n();                   // 10
//   }, 5)
//
//   z();                     // 9
// }, 10);
//
// setTimeout(function() {    // 2
//   s();                     // 11
// }, 20);
//
// setTimeout(function() {    // 3
//   f();                     // 5
// });
//
// g();                       // 4

function afterNSeconds(func, waitTime) {
  return setInterval(func, waitTime * 1000);
}


var counterID;

function startCounting() {
  var count = 1;
  var countUp = function() {
    console.log(count);
    count++;
  };

  counterID = afterNSeconds(countUp, count);
}

function stopCounting() {
  clearInterval(counterID);
}
