func uniquePathsWithObstacles(obstacleGrid [][]int) int {
  m, n := len(obstacleGrid), len(obstacleGrid[0])
  if obstacleGrid[m-1][n-1] == 1 {
    return 0
  }
  dp := make([][]int, m)
  for i, _ := range dp {
    dp[i] = make([]int, n)
  }
  if obstacleGrid[m-1][n-1] == 1 {
    dp[m-1][n-1] = 0
  } else {
    dp[m-1][n-1] = 1
  }

  inBounds := func(r int, c int) bool {
    return r >= 0 && r < m && c >= 0 && c < n
  }

  dpValue := func(r int, c int) int {
    if inBounds(r, c) {
      return dp[r][c]
    } else {
      return 0
    }
  }
  
  for r:=m-1;r>=0;r-- {
    for c:=n-1;c>=0;c-- {
      if r != m-1 || c != n-1 {
        if obstacleGrid[r][c] == 0 {
          dp[r][c] = dpValue(r+1, c) + dpValue(r, c+1)
        } else {
          dp[r][c] = 0
        }
      }
    }
  }
  return dp[0][0]
}
