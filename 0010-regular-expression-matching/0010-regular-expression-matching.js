/**
* @param {string} s
* @param {string} p
* @return {boolean}
*/
var isMatch = function (s, p) {
  const parsed = [];
  let i = 0;
  while (i < p.length) {
    if (p[i + 1] === '*') {
      parsed.push(p[i] + p[i + 1]);
      i += 2;
    } else {
      parsed.push(p[i]);
      i++;
    }
  }

  const charMatch = (ch1, ch2) => {
    return ch2 === '.' || ch2 === ch1;
  };

  const dfs = (s, parsed, dp) => {
    if (s.length && !parsed.length) return false;
    if (!s.length && !parsed.length) return true;
    if (!s.length && parsed.length) return parsed.every(el => el.length === 2);

    const first = parsed.shift();
    if (first.length === 1) {
      return charMatch(s[0], first) && isMatch(s.slice(1), parsed, dp);
    } else {
      if (!charMatch(s[0], first[0])) {
        return isMatch(s, parsed, dp);
      } else {
        const key = JSON.stringify([s, [first, ...parsed]]);
        if (dp[key] !== undefined) {
          return dp[key];
        } else {
          let len = 1;
          while (first[0] === '.' && len < s.length || s[len] === s[0]) {
            len++;
          }

          let ans = false;
          for (let i = 0; i <= len; i++) {
            ans ||= isMatch(s.slice(i), parsed, dp);
          }
          dp[key] = ans;
          return ans;
        }
      }
    }
  };
  
  return dfs(s, parsed, {});
};
