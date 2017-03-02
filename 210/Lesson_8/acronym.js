function acronym(string) {
  var cleanString = string.replace(/[^a-z\- ]/ig, '');
  var wordArr = cleanString.split(/[\s\-]/);
  var initials = wordArr.map(function(word) {
    return word[0].toUpperCase();
  }).join('')

  console.log(initials);
}
acronym('Portable Network Graphics');                 // "PNG"
acronym('First In, First Out');                       // "FIFO"
acronym('PHP: HyperText Preprocessor');               // "PHP"
acronym('Complementary metal-oxide semiconductor');   // "CMOS"
acronym('Hyper-text Markup Language');                // "HTML"
