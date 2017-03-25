document.addEventListener('DOMContentLoaded', function() {
  var img = document.querySelector('.image img');
  var caption = img.alt;
  var span = document.querySelector('span');

  img.addEventListener('mousemove', function(event) {
    span.style.top = event.clientY.toString() + 'px';
    span.style.left = event.clientX.toString() + 'px';

    span.style.top = (span.offsetTop > 375 ? '375px' : span.style.top);
    span.style.left = (span.offsetLeft > 263 ? '263px' : span.style.left);

    span.innerText = caption;
  });

  img.addEventListener('mouseleave', function(event) {
    span.innerText = null;
  });
});
