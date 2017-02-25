// function totalSquareArea(shapes) {
//   var areas = shapes.filter(function(shape, index, arrays) {
//     return shape[0] == shape[1];
//   }).map(function(shape, index, arrays) {
//     return shape[0] * shape[1];
//   });
//
//   return areas.reduce(function(total, area) {
//     return total + area;
//   }, 0);
// }
//
// var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];
//
// var answer = totalSquareArea(rectangles);


// Processing Releases

// var newReleases = [
//   {
//     'id': 70111470,
//     'title': 'Die Hard',
//     'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
//     'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
//     'rating': [4.0],
//     'bookmark': [],
//   },
//   {
//     'id': 654356453,
//     'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
//     'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
//     'rating': [5.0],
//     'bookmark': [{ id:432534, time:65876586 }],
//   },
//   {
//     'title': 'The Chamber',
//     'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
//     'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
//     'rating': [4.0],
//     'bookmark': [],
//   },
//   {
//     'id': 675465,
//     'title': 'Fracture',
//     'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
//     'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
//     'rating': [5.0],
//     'bookmark': [{ id:432534, time:65876586 }],
//   },
// ];
//
// function processReleaseData(data) {
//   var filtered = data.filter(function(obj) {
//     return obj.id && obj.title;
//   });
//
//   var mapped = filtered.map(function(obj) {
//     return {
//       id: obj.id,
//       title: obj.title
//     }
//   });
//
//   return mapped;
// };
//
// var answer = processReleaseData(newReleases);


// Octal
//
// function octalToDecimal(number) {
//   var toOctal = number.split('').reverse().reduce(function(sum, num, index) {
//     return sum + Number(num) * Math.pow(8, index);
//   }, 0);
//
//   console.log(toOctal);
// }
//
// octalToDecimal('1');
// octalToDecimal('10');
// octalToDecimal('130');
// octalToDecimal('17');
// octalToDecimal('2047');
// octalToDecimal('011');



// Anagrams

function anagram(word, list) {
  function sortString(string) {
    return string.split('').sort().join('')
  }

  function areAnagrams(word1, word2) {
    return sortString(word1) === sortString(word2);
  }

  var anagrams = list.filter(function(list_word) {
    return areAnagrams(word, list_word);
  });

  console.log(anagrams);
}

anagram('listen', ['enlists', 'google', 'inlets', 'banana']);
anagram('listen', ['enlist', 'google', 'inlets', 'banana']);
