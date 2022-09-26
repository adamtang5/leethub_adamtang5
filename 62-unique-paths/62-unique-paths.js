/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const dp = new Array(m).fill().map(() => new Array(n));
    for (let i = 0; i < m; i++) {
        dp[i][n-1] = 1;
    }
    
    for (let i = 0; i < n; i++) {
        dp[m-1][i] = 1;
    }
    
    for (let r = m-2; r >= 0; r--) {
        for (let c = n-2; c >= 0; c--) {
            dp[r][c] = dp[r+1][c] + dp[r][c+1];
        }
    }
    
    return dp[0][0];
};