/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  const dp = {};
  dp[0] = 1;
  
  const helper = seg => {
    let total = 0;
    for (let n = 1; n <= seg; n++) {
      total += dp[n - 1] * dp[seg - n];
    }
    dp[seg] = total;
  };
  
  for (let i = 1; i <= n; i++) {
    helper(i);
  }
  return dp[n];
};