/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
  let ans = '';
  let code;
  while (columnNumber > 0) {
    if (columnNumber % 26) {
      code = columnNumber % 26;
      columnNumber = Math.floor(columnNumber / 26);
    } else {
      code = 26;
      columnNumber -= code;
      columnNumber /= code;
    }
    ans = String.fromCharCode('A'.charCodeAt(0) + code - 1) + ans;
  }
  return ans;
};