func uniquePaths(m int, n int) int {
  dp := make([][]int, m)
  for i := range dp {
    dp[i] = make([]int, n)
  }
  for i:=0;i<m;i++ {
    for j:=0;j<n;j++ {
      dp[i][j] = 1
    }
  }
  for r:=m-2;r>=0;r-- {
    for c:=n-2;c>=0;c-- {
      dp[r][c] = dp[r + 1][c] + dp[r][c+1]
    }
  }
  return dp[0][0]
}
