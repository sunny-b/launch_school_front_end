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
//
// function anagram(word, list) {
//   function sortString(string) {
//     return string.split('').sort().join('')
//   }
//
//   function areAnagrams(word1, word2) {
//     return sortString(word1) === sortString(word2);
//   }
//
//   var anagrams = list.filter(function(list_word) {
//     return areAnagrams(word, list_word);
//   });
//
//   console.log(anagrams);
// }
//
// anagram('listen', ['enlists', 'google', 'inlets', 'banana']);
// anagram('listen', ['enlist', 'google', 'inlets', 'banana']);


// Bands

// var bands = [
//   { name: 'sunset rubdown', country: 'UK', active: false },
//   { name: 'women', country: 'Germany', active: false },
//   { name: 'a silver mt. zion', country: 'Spain', active: true },
// ];
//
// function processBands(data) {
//   function removePeriod(string) {
//     return string.replace(/\./g, '');
//   }
//
//   function capitalize(string) {
//     return string.split(' ').map(function(word) {
//       return word[0].toUpperCase() + word.slice(1);
//     }).join(' ');
//   }
//
//   function format(bandName) {
//     var formattedName = removePeriod(bandName);
//     formattedName = capitalize(formattedName);
//
//     return formattedName;
//   }
//
//   return data.map(function(band) {
//     return {
//       name: format(band.name),
//       country: 'Canada',
//       active: band.active,
//     }
//   });
// }
//
// var answer = processBands(bands);



// Student Grades

var studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {
  function extractStudentData(scores, data) {
    Object.keys(scores).forEach(function(key) {
      var student = data['studentScores'][key];
      var studentScores = scores[key]['scores'];

      student['examAvg'] = calcStudentExamAvg(studentScores);
      student['exerciseTotal'] = calcExerciseTotal(studentScores);
      populateFields(data['exams'], studentScores);
    });
  }
  function calcStudentExamAvg(studentScores) {
    var examScores = studentScores['exams'];
    var examTotal = examScores.reduce(function(acc, score) {
      return acc + score;
    });

    return Math.round((examTotal / examScores.length) * 100) / 100;
  }
  function calcExerciseTotal(studentScores) {
    var exerciseScores = studentScores['exercises'];
    var exerciseTotal = exerciseScores.reduce(function(acc, score) {
      return acc + score;
    });

    return exerciseTotal;
  }
  function populateFields(exams, studentScores) {
    Object.keys(exams).forEach(function(exam, index) {
      exams[exam].push(studentScores['exams'][index]);
    });
  }

  function processStudentData(data) {

  }

  var data = {
    exams: {
      exam1: [],
      exam2: [],
      exam3: [],
      exam4: [],
    },

    studentScores: {
      student1: {
        examAvg: null,
        exerciseTotal: null,
        finalGrade: null,
      },
      student2: {
        examAvg: null,
        exerciseTotal: null,
        finalGrade: null,
      },
      student3: {
        examAvg: null,
        exerciseTotal: null,
        finalGrade: null,
      },
      student4: {
        examAvg: null,
        exerciseTotal: null,
        finalGrade: null,
      },
      student5: {
        examAvg: null,
        exerciseTotal: null,
        finalGrade: null,
      },
    },
  };

  extractStudentData(scores, data);
  processStudentData(data);
  renderSummary(data);
  //
  // sortedExams = exams.sort(function(exam1, exam2) {
  //   if (exam1.average < exam2.average) {
  //     return -1;
  //   } else if (exam1.average > exam2.average) {
  //     return 1;
  //   } else {
  //     return 0;
  //   }
  // });
  //
  // return exams;
};

var answer = generateClassRecordSummary(studentScores);

// returns:
//
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }
