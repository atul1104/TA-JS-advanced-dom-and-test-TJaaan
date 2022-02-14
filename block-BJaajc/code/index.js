function getFullName(fn, ln) {
  return `${fn} ${ln}`;
}

function isPalindrome(str) {
  var len = str.length;
  var mid = Math.floor(len.length / 2);

  for (var i = 0; i < mid; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

function getCircumfrence(rad) {
  var circumferenceOfCircle = 2 * Math.PI * rad;
  console.log('The Circumference of circle is: ' + circumferenceOfCircle);
}

function getArea(rad) {
  var area = rad * rad * Math.PI;
  console.log('The area is: ' + area);
}

module.exports = getFullName;
