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

// function generateClassRecordSummary(scores) {
//   var EXAM_WEIGHT = 0.65;
//   var EXERCISE_WEIGHT = 0.35;
//
//   function extractStudentData(scores, data) {
//     Object.keys(scores).forEach(function(key) {
//       var student = data['studentScores'][key];
//       var studentScores = scores[key]['scores'];
//
//       student['examAvg'] = calcAvg(studentScores['exams']);
//       student['exerciseTotal'] = calcTotal(studentScores['exercises']);
//       populateFields(data['exams'], studentScores);
//     });
//   }
//   function calcAvg(examScores) {
//     var examTotal = calcTotal(examScores);
//
//     return Math.round((examTotal / examScores.length) * 100) / 100;
//   }
//   function calcTotal(exerciseScores) {
//     var exerciseTotal = exerciseScores.reduce(function(acc, score) {
//       return acc + score;
//     });
//
//     return exerciseTotal;
//   }
//   function populateFields(exams, studentScores) {
//     Object.keys(exams).forEach(function(exam, index) {
//       exams[exam]['scores'].push(studentScores['exams'][index]);
//     });
//   }
//
//   function processStudentData(data) {
//     calcExamAvgMinMax(data['exams']);
//     calcGrade(data['studentScores']);
//   }
//   function calcExamAvgMinMax(exams) {
//     Object.keys(exams).forEach(function(key) {
//       var exam = exams[key];
//
//       exam['average'] = calcAvg(exam['scores']);
//       exam['minimum'] = Math.min.apply(null, exam['scores']);
//       exam['maximum'] = Math.max.apply(null, exam['scores']);
//     });
//   }
//   function calcGrade(studentScores) {
//     Object.keys(studentScores).forEach(function(key) {
//       var student = studentScores[key];
//
//       student['finalScore'] = calcGradeScore(student);
//       student['letterGrade'] = determineLetterGrade(student.finalScore);
//     });
//   }
//   function calcGradeScore(student) {
//     var weightedExam = student.examAvg * EXAM_WEIGHT;
//     var weightedExercises = student.exerciseTotal * EXERCISE_WEIGHT;
//     var total = weightedExam + weightedExercises;
//
//     return Math.round(total);
//   }
//   function determineLetterGrade(finalScore) {
//     var letter;
//     if (finalScore >= 93) {
//       letter = ' (A)';
//     } else if (finalScore >= 85) {
//       letter = ' (B)';
//     } else if (finalScore >= 77) {
//       letter = ' (C)';
//     } else if (finalScore >= 69) {
//       letter = ' (D)';
//     } else if (finalScore >= 60) {
//       letter = ' (E)';
//     } else {
//       letter = ' (F)';
//     }
//
//     return finalScore + letter;
//   }
//
//   function renderSummary(data) {
//     var summary = {
//       studentGrades: [],
//       exams: [],
//     };
//
//     populateStudentGrades(data['studentScores'], summary['studentGrades']);
//     populateExams(data['exams'], summary['exams']);
//
//     return summary;
//   }
//   function populateStudentGrades(studentScores, summary) {
//     Object.keys(studentScores).forEach(function(key) {
//       var student = studentScores[key];
//
//       summary.push(student.letterGrade);
//     });
//   }
//   function populateExams(exams, summary) {
//     Object.keys(exams).forEach(function(key) {
//       var exam = exams[key];
//
//       summary.push({average: exam.average,
//                     minimum: exam.minimum,
//                     maximum: exam.maximum, });
//     });
//   }
//
//   var data = {
//     exams: {
//       exam1: {
//         scores: [],
//         average: null,
//         minimum: null,
//         maximum: null,
//       },
//       exam2: {
//         scores: [],
//         average: null,
//         minimum: null,
//         maximum: null,
//       },
//       exam3: {
//         scores: [],
//         average: null,
//         minimum: null,
//         maximum: null,
//       },
//       exam4: {
//         scores: [],
//         average: null,
//         minimum: null,
//         maximum: null,
//       },
//     },
//
//     studentScores: {
//       student1: {
//         examAvg: null,
//         exerciseTotal: null,
//         letterGrade: null,
//       },
//       student2: {
//         examAvg: null,
//         exerciseTotal: null,
//         letterGrade: null,
//       },
//       student3: {
//         examAvg: null,
//         exerciseTotal: null,
//         letterGrade: null,
//       },
//       student4: {
//         examAvg: null,
//         exerciseTotal: null,
//         letterGrade: null,
//       },
//       student5: {
//         examAvg: null,
//         exerciseTotal: null,
//         letterGrade: null,
//       },
//     },
//   };
//   var summary;
//
//   extractStudentData(scores, data);
//   processStudentData(data);
//   summary = renderSummary(data);
//
//   return summary;
// };

function generateClassRecordSummary(scores) {
  // an array of score objects, with both exams and exercises
  var scoreData = Object.keys(scores).map(function(student) {
    return scores[student].scores;
  });

  // transform the above score objects to be an array of arrays for exam scores
  var examData = scoreData.map(function(score) {
    return score.exams;
  });

  return {
    studentGrades: scoreData.map(function(scoreObj) {
      return getStudentScore(scoreObj);
    }),
    exams: getExamSummary(examData),
  }
}

function getStudentScore(scoreObj) {
  var examAvg = calcAvg(scoreObj.exams);
  var exerciseTotal = calcTotal(scoreObj.exercises);
  var gradeScore = Math.round(calcGradeScore(examAvg, exerciseTotal));
  var letterGrade = determineLetterGrade(gradeScore);

  return letterGrade;
}

function calcAvg(examScores) {
  var examTotal = calcTotal(examScores);

  return Math.round((examTotal / examScores.length) * 100) / 100;
}

function calcTotal(exerciseScores) {
  var exerciseTotal = exerciseScores.reduce(function(acc, score) {
    return acc + score;
  });

  return exerciseTotal;
}

function calcGradeScore(examAvg, exerciseTotal) {
  var EXAM_WEIGHT = 0.65;
  var EXERCISE_WEIGHT = 0.35;

  var weightedExam = examAvg * EXAM_WEIGHT;
  var weightedExercises = exerciseTotal * EXERCISE_WEIGHT;
  var total = weightedExam + weightedExercises;

  return Math.round(total);
}

function determineLetterGrade(finalScore) {
  var letter;

  if (finalScore >= 93) {
    letter = ' (A)';
  } else if (finalScore >= 85) {
    letter = ' (B)';
  } else if (finalScore >= 77) {
    letter = ' (C)';
  } else if (finalScore >= 69) {
    letter = ' (D)';
  } else if (finalScore >= 60) {
    letter = ' (E)';
  } else {
    letter = ' (F)';
  }

  return finalScore + letter;
}

function getExamSummary(examData) {
  var scoresPerExam = transpose(examData);

  var examSummary = scoresPerExam.map(function(scores) {
    var summary = {};

    summary['average'] = calcAvg(scores);
    summary['minimum'] = Math.min.apply(null, scores);
    summary['maximum'] = Math.max.apply(null, scores);

    return summary;
  });

  return examSummary;
}

function transpose(array) {
  return array[0].map(function(col, columnIdx) {
    return array.map(function(row) {
      return row[columnIdx];
    });
  });
}

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
