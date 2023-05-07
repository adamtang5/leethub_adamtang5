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
    const key = JSON.stringify([s, parsed]);
    
    if (s.length && !parsed.length) {
      dp[key] = false;
      return dp[key];
    }
    if (!s.length && !parsed.length) {
      dp[key] = true;
      return dp[key];
    }
    if (!s.length && parsed.length) {
      dp[key] = parsed.every(el => el.length === 2);
      return dp[key];
    }

    const first = parsed.shift();
    if (first.length === 1) {
      dp[key] = charMatch(s[0], first) && dfs(s.slice(1), parsed, dp);
      return dp[key];
    } else {
      if (!charMatch(s[0], first[0])) {
        dp[key] = dfs(s, parsed, dp);
        return dp[key];
      } else {
        if (dp[key] !== undefined) {
          return dp[key];
        } else {
          let len = 1;
          while (first[0] === '.' && len < s.length || s[len] === s[0]) {
            len++;
          }

          let ans = false;
          for (let i = 0; i <= len; i++) {
            const copy = parsed.slice();
            ans ||= dfs(s.slice(i), copy, dp);
          }
          dp[key] = ans;
          return ans;
        }
      }
    }
  };
  
  return dfs(s, parsed, {});
};
