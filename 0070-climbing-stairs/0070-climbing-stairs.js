/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const dp = {};
    dp[1] = 1;
    dp[2] = 2;
    
    for (let x = 3; x <= n; x++) {
        dp[x] = dp[x - 1] + dp[x - 2];
    }
    return dp[n];
};