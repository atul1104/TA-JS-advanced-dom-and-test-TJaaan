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
