func minPathSum(grid [][]int) int {
  m, n := len(grid), len(grid[0])
  dp := make([][]int, m)
  for i := range dp {
    dp[i] = make([]int, n)
  }
  for r:=0;r<m;r++ {
    for c:=0;c<n;c++ {
      dp[r][c] = 300
    }
  }
  dp[m-1][n-1] = grid[m-1][n-1]
  for i:=n-2;i>=0;i-- {
    dp[m-1][i] = dp[m-1][i+1]+grid[m-1][i]
  }
  for i:=m-2;i>=0;i-- {
    dp[i][n-1] = dp[i+1][n-1]+grid[i][n-1]
  }
  for r:=m-2;r>=0;r-- {
    for c:=n-2;c>=0;c-- {
      dp[r][c] = min(dp[r+1][c], dp[r][c+1])+grid[r][c]
    }
  }
  return dp[0][0]
}