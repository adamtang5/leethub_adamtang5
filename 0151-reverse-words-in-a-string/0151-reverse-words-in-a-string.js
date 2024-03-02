/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let ans = "";
  let curr = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      if (curr.length && ans.length) {
        ans = curr + " " + ans;
      } else if (curr.length && !ans.length) {
        ans = curr;
      }
      curr = "";
    } else {
      curr += s[i];
    }
  }
  if (curr.length && ans.length) {
    ans = curr + " " + ans;
  } else if (curr.length && !ans.length) {
    ans = curr;
  }
  
  return ans;
};