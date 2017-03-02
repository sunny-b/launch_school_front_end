function compareVersions(version1, version2) {
  if (isNotValidVersion(version1) || isNotValidVersion(version2)) {
    return null;
  }

  function toInt(string) {
    return Number(string);
  }

  var verArr1 = version1.split('.').map(toInt(num));
  var verArr2 = version2.split('.').map(toInt(num));
  var counter = 0;

  while (true) {
    if (isUndefined(verArr1, verArr2)) {
      
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

function isNotValidVersion(version1, version2) {
  return !!version.match(/[^0-9.]/);
}

function isUndefined(num1, num2) {
  return (num1 === undefined || num2 === undefined);
}

compareVersions('0.1', '1') === -1
compareVersions('1.0', '1') === 0
compareVersions('1.0', '1.1') === -1
compareVersions('1.2', '1.1') === 1
compareVersions('1.2', '1.2.0.0') === 0
compareVersions('1.18.2', '1.2.0.0') === 1
compareVersions('1.2', '13.37') === -1
compareVersions('1.2', '13.37.a') === -1
