/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const [m, n] = [obstacleGrid.length, obstacleGrid[0].length];
  if (obstacleGrid[m - 1][n - 1] === 1) return 0;
  const dp = new Array(m + 1).fill().map(() => new Array(n + 1));

  const inBounds = (r, c) => {
    return r >= 0 && r < m && c >= 0 && c < n;
  };

  const dpValue = (r, c) => {
    return !inBounds(r, c) ? 0 : dp[r][c];
  };

  dp[m - 1][n - 1] = obstacleGrid[m - 1][n - 1] === 1 ? 0 : 1;

  for (let r = m - 1; r >= 0; r--) {
    for (let c = n - 1; c >= 0; c--) {
      if (r !== m - 1 || c !== n - 1) {
        dp[r][c] = obstacleGrid[r][c] === 0 ?
          dpValue(r + 1, c) + dpValue(r, c + 1) : 0;
      }
    }
  }

  return dp[0][0];
};