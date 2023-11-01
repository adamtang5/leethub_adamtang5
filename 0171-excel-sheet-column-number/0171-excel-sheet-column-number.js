/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
  const codes = [];
  for (let i = 0; i < columnTitle.length; i++) {
    codes.push(columnTitle.charCodeAt(i) - 'A'.charCodeAt(0) + 1);
  }
  let [n, ans] = [0, 0];
  let popped;
  while (codes.length) {
    popped = codes.pop();
    ans += popped * 26 ** n++;
  }
  return ans;
};