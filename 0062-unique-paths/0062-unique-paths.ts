function uniquePaths(m: number, n: number): number {
  const dp: number[][] = new Array(m).fill([]).map(() => new Array(n).fill(1))
  for (let r = m - 2; r >= 0; r--) {
    for (let c = n - 2; c >= 0; c--) {
      dp[r][c] = dp[r + 1][c] + dp[r][c + 1]
    }
  }
  return dp[0][0]
}