function compareVersions(version1, version2) {
  if (!isValidVersion(version1) || !isValidVersion(version2)) {
    return null;
  }

  var toInt = function(string) { return Number(string) };
  var verArr1 = version1.split('.').map(toInt);
  var verArr2 = version2.split('.').map(toInt);
  var counter = 0;
  var returnVal;

  while (counter < verArr1.length || counter < verArr2.length) {
    if (endOf(verArr1[counter])) {
      return (isGreater(verArr2, counter) ? -1 : 0);
    } else if (endOf(verArr2[counter])) {
      return (isGreater(verArr1, counter) ? 1 : 0);
    } else if (verArr1[counter] < verArr2[counter]) {
      return -1;
    } else if (verArr1[counter] > verArr2[counter]) {
      return 1;
    } else {
      counter++;
      continue;
    }
  }

  return 0;
}

function isValidVersion(version) {
  return !!version.match(/^([0-9]+\.)*([0-9]+)$/);
}
function endOf(version) {
  return version === undefined;
}
function sum(acc, val) {
  return acc + val;
}
function isGreater(version, counter) {
  return version.slice(counter).reduce(sum) !== 0
}


console.log(compareVersions('1', '1'));          // 0
console.log(compareVersions('1.1', '1.0'));      // 1
console.log(compareVersions('2.3.4', '2.3.5'));  // -1
console.log(compareVersions('1.a', '1'));        // null
console.log(compareVersions('.1', '1'));         // null
console.log(compareVersions('1.', '2'));         // null
console.log(compareVersions('1..0', '2.0'));     // null
console.log(compareVersions('1.0', '1.0.0'));    // 0
console.log(compareVersions('1.0.0', '1.1'));    // -1
console.log(compareVersions('1.0', '1.0.5'));
