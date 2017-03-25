document.addEventListener('DOMContentLoaded', function() {
  var textField = document.querySelector('.text-field');
  var content = document.querySelector('.content');
  var id;
  textField.onclick = function(event) {
    event.stopPropagation();
    textField.classList.add('focused');
    id = setInterval(function(){
      textField.classList.toggle('cursor');
    }, 500);
  };

  document.addEventListener('keydown', function(event) {
    if (textField.classList.contains('focused')) {
      if (event.key === 'Backspace') {
        content.innerText = content.innerText.slice(0, -1);
      } else if (/^[a-z]$/i.test(event.key)) {
        content.innerText += event.key;
      }
    }
  });

  document.onclick = function() {
    textField.classList.remove('focused');
    textField.classList.remove('cursor');
    clearInterval(id);
  }
});
