/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  const ans = [];
  const part = [];
  
  const isPali = (st, l, r) => {
    while (l < r) {
      if (st[l] !== st[r]) return false;
      l++;
      r--;
    }
    return true;
  };
  
  const dfs = i => {
    if (i >= s.length) {
      ans.push(part.slice());
      return;
    }
    for (let j = i; j < s.length; j++) {
      if (isPali(s, i, j)) {
        part.push(s.slice(i, j + 1));
        dfs(j + 1);
        part.pop();
      }
    }
  };
  
  dfs(0);
  return ans;
};