/**
* @param {string[]} strs
* @return {string}
*/
var longestCommonPrefix = function(strs) {
  let [ans, i] = ['', 0];
  let minLength = Math.min(...strs.map(s => s.length));

  while (i < minLength) {
    if (strs.every(s => s[i] === strs[0][i])) {
      ans += strs[0][i];
      i++;
    } else {
      break;
    }
  }
  return ans;
};