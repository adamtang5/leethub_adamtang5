/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  p = p.replaceAll(/\*+/g, '*');
  
  const charMatch = (ch1, ch2) => {
    return ch2 === '?' || ch2 === ch1;
  };
  
  const dfs = (sIdx, pIdx, dp) => {
    const key = `${sIdx}-${pIdx}`;
    
    if (sIdx < s.length && pIdx === p.length) {
      dp[key] = false;
      return dp[key];
    }
    if (sIdx === s.length && pIdx === p.length) {
      dp[key] = true;
      return dp[key];
    }
    if (sIdx === s.length && pIdx < p.length) {
      dp[key] = true;
      for (let i = pIdx; i < p.length; i++) {
        if (p[i] !== '*') {
          dp[key] = false;
          break;
        }
      }
      return dp[key];
    }
    
    if (p[pIdx] !== '*') {
      if (!charMatch(s[sIdx], p[pIdx])) {
        dp[key] = false;
        return dp[key];
      } else {
        dp[key] = dfs(sIdx + 1, pIdx + 1, dp);
        return dp[key];
      }
    } else {
      while (pIdx < p.length - 1 && p[pIdx + 1] === '*') pIdx++;
      if (dp[key] !== undefined) {
        return dp[key];
      } else {
        let ans = false;
        for (let i = sIdx; i <= s.length; i++) {
          ans ||= dfs(i, pIdx + 1, dp);
        }
        dp[key] = ans;
        return dp[key];
      }
    }
  };
  
  return dfs(0, 0, {});
};