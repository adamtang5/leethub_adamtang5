function minPathSum(grid: number[][]): number {
  const [m, n] = [grid.length, grid[0].length]
  const dp: number[][] = new Array(m).fill([]).map(() => new Array(n).fill(Infinity))
  dp[m - 1][n - 1] = grid[m - 1][n - 1]
  for (let i = n - 2; i >= 0; i--) {
    dp[m - 1][i] = dp[m - 1][i + 1] + grid[m - 1][i]
  }
  for (let i = m - 2; i >= 0; i--) {
    dp[i][n - 1] = dp[i + 1][n - 1] + grid[i][n - 1]
  }
  for (let r = m - 2; r >= 0; r--) {
    for (let c = n - 2; c >= 0; c--) {
      dp[r][c] = grid[r][c] + Math.min(dp[r + 1][c], dp[r][c + 1])
    }
  }
  return dp[0][0]
}