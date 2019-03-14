module.exports = function check(str, bracketsConfig) {
  var i = 0,
    answer;
  str = str + (bracketsConfig.join('')).replace(/,/g, '');
  while (i <= str.length) {
    if (isNaN(str[i])) {
      switch (str[i] + str[i + 1]) {
        case "()":
          str = str.slice(0, i) + str.slice(i + 2, str.length);
          i--;
          break;
        case "[]":
          str = str.slice(0, i) + str.slice(i + 2, str.length);
          i--;
          break;
        case "{}":
          str = str.slice(0, i) + str.slice(i + 2, str.length);
          i--;
          break;
        case "||":
          str = str.slice(0, i) + str.slice(i + 2, str.length);
          i--;
          break;
        default:
          i++;
      }
    } else if (str[i] == str[i + 1]) {
      str = str.slice(0, i) + str.slice(i + 2, str.length);
      i--;
    }
    else { i++ };
  }
  if (str === "") {
    answer = true;
  } else {
    answer = false;
  };
  return answer;
}
