function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const [m, n] = [obstacleGrid.length, obstacleGrid[0].length]
  if (obstacleGrid[m - 1][n - 1] === 1) return 0
  
  function inBounds(r: number, c: number): boolean {
    return r >= 0 && r < m && c >= 0 && c < n
  }
  
  const dp: number[][] = new Array(m + 1).fill([]).map(() => new Array(n + 1).fill(0))
  
  function dpValue(r: number, c: number): number {
    return !inBounds(r, c) ? 0 : dp[r][c]
  }
  
  dp[m - 1][n - 1] = obstacleGrid[m - 1][n - 1] === 1 ? 0 : 1
  
  for (let r = m - 1; r >= 0; r--) {
    for (let c = n - 1; c >= 0; c--) {
      if (r !== m - 1 || c !== n - 1) {
        dp[r][c] = obstacleGrid[r][c] === 0 ? dpValue(r + 1, c) + dpValue(r, c + 1) : 0
      }
    }
  }
  return dp[0][0]
}