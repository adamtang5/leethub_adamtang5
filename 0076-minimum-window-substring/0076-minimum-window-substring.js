/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  const tTally = {};
  const window = {};
  for (let i = 0; i < t.length; i++) {
    tTally[t[i]] = tTally[t[i]] || 0;
    tTally[t[i]]++;
  }
  let [have, lb, ub, l] = [0, -1, s.length + 1, 0];
  const need = Object.keys(tTally).length;
  
  for (let r = 0; r < s.length; r++) {
    if (tTally[s[r]] !== undefined) {
      window[s[r]] = window[s[r]] || 0;
      window[s[r]]++;
      if (window[s[r]] === tTally[s[r]]) have++;
      while (have === need) {
        if (r + 1 - l < ub - lb) [lb, ub] = [l, r + 1];
        if (tTally[s[l]] !== undefined) {
          window[s[l]]--;
          if (window[s[l]] < tTally[s[l]]) have--;
        }
        l++;
      }
    }
  }

  return lb < 0 ? "" : s.slice(lb, ub);
};