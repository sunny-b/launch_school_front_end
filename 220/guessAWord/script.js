$message = $('#message');
$guesses = $('.guess .letters');
$apples = $('.apples');
$letters = $('.word .letters');

var randomWord = function() {
  var words = ['apple', 'banana', 'orange', 'pear'];

  return function() {
    var randIdx = Math.floor(Math.random() * words.length);
    var randWord = words.splice(randIdx, 1)[0];

    return randWord;
  };
}();

var Game = {
  guesses: 6,
  pickWord: function() {
    var word = randomWord();

    if (!word) {
      this.displayMessage("Sorry, I've run out of words!");
    }

    return word;
  },
  createBlanks: function() {
    var letters = this.word.split('').map(char => '<li>' + char + '</li>');
    $letters.append(letters);
  },
  displayMessage: function(text) {
    $message.text(text);
  },
  playerGuess: function(e) {
    e.preventDefault();
    var letter = e.key;

    if (notALetter(letter) || this.duplicateGuess(letter)) return;

    this.processGuess(letter);
  },
  duplicateGuess: function(letter) {
    return this.correctLetters.includes(letter);
  },
  processGuess: function(letter) {
    if (this.correctGuess(letter)) {
      this.reveal(letter);
      this.correctLetters.push(letter);
    } else if (this.incorrectGuess(letter)) {
      this.dropApple();
    }

    this.updateGame(letter);
  },
  correctGuess: function(letter) {
    return this.word.includes(letter);
  },
  incorrectGuess: function(letter) {
    return !this.word.includes(letter)
  },
  dropApple: function() {
    $apples.removeClass('guess-' + this.incorrectGuesses);
    this.incorrectGuesses++;
    $apples.addClass('guess-' + this.incorrectGuesses);
  },
  reveal: function(letter) {
    $letters.find('li').filter(function() {
      return $(this).text() === letter;
    }).css('color', 'black');
  },
  updateGame: function(letter) {
    var revealedLetters = $letters.find('li').filter(function() {
      return $(this).css('color') === 'rgb(0, 0, 0)';
    });

    this.showGuess(letter);

    if (this.incorrectGuesses === this.guesses) {
      this.lostGame();
    } else if (revealedLetters.length === this.word.length) {
      this.wonGame();
    }
  },
  showGuess: function(letter) {
    if (this.lettersGuessed.includes(letter)) {
      return;
    } else {
      this.lettersGuessed.push(letter);
      $guesses.append('<li>' + letter + '</li>');
    }
  },
  lostGame: function() {
    this.unbind();
    this.displayMessage("Sorry! You're out of guesses");
    this.playAgain();
    $('body').css('background-color', 'red');
  },
  wonGame: function() {
    this.unbind();
    this.displayMessage('You Win!');
    this.playAgain();
    $('body').css('background-color', 'lightblue');
  },
  playAgain: function() {
    $('.new').addClass('show');
  },
  emptyGuesses: function() {
    $letters.find('li').remove();
    $guesses.find('li').remove();
  },
  resetAssets: function() {
    $apples.attr('class', 'apples guess-0');
    $('body').css('background-color', '');
    $('.new').removeClass('show');
  },
  unbind: function() {
    $(document).off('.game');
  },
  bind: function() {
    $(document).on('keypress.game', this.playerGuess.bind(this));
  },
  newGame: function() {
    this.unbind();
    this.bind();
    this.emptyGuesses();
    this.resetAssets();
    this.createBlanks();
    this.displayMessage('');
  },
  init: function() {
    this.word = this.pickWord();
    this.lettersGuessed = [];
    this.correctLetters = [];
    this.incorrectGuesses = 0;
    this.newGame();

    return this;
  }
};

Object.create(Game).init();

$('.new').click(function() {
  Object.create(Game).init();
});

function notALetter(letter) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return !alphabet.includes(letter);
}
