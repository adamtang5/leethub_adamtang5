/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
  const starter = new Array(26).fill(0);
  const aCode = "a".charCodeAt(0);
  const dp = {};

  const dfs = (s1, s2) => {
    const key = `${s1}-${s2}`;
    if (key in dp) return dp[key];
    if (s1.length === 1) {
      let ans = s1 === s2;
      dp[key] = ans;
      return ans;
    }
    const tally1 = starter.slice();
    const tally2 = starter.slice();
    for (let i = 0; i < s1.length; i++) {
      tally1[s1.charCodeAt(i) - aCode]++;
      tally2[s2.charCodeAt(i) - aCode]++;
    }
    if (JSON.stringify(tally1) !== JSON.stringify(tally2)) {
      dp[key] = false;
      return false;
    }
    
    let ans = false;
    for (let split = 1; split < s1.length; split++) {
      ans ||= dfs(s1.slice(0, split), s2.slice(0, split)) &&
        dfs(s1.slice(split), s2.slice(split));
      ans ||= dfs(s1.slice(0, split), s2.slice(s2.length - split)) &&
        dfs(s1.slice(split), s2.slice(0, s2.length - split));
    }
    dp[key] = ans;
    return ans;
  };
  
  return dfs(s1, s2);
};