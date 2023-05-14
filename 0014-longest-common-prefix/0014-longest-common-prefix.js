/**
* @param {string[]} strs
* @return {string}
*/
var longestCommonPrefix = function(strs) {
  let ans = '';
  let minLength = Math.min(...strs.map(s => s.length));

  for (let i = 0; i < minLength; i++) {
    if (strs.every(s => s[i] === strs[0][i])) {
      ans += strs[0][i];
    } else {
      break;
    }
  }
  return ans;
};