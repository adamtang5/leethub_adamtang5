/**
* @param {string[]} strs
* @return {string}
*/
var longestCommonPrefix = function(strs) {
  let [ans, minLength, i] = ['', Infinity, 0];
  minLength = Math.min(...strs.map(s => s.length));

  while (i < minLength) {
    let ch = strs[0][i];
    if (strs.every(s => s[i] === ch)) {
      ans += ch;
      i++;
    } else {
      break;
    }
  }

  return ans;
};