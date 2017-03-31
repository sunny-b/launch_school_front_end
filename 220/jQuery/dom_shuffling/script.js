$(function() {
  $('main + header').prependTo('body');
  $('h1:contains(My Site)').prependTo('header:first-child');
  $('figure').first().appendTo('#content');
  $('figure').appendTo('article');
});
