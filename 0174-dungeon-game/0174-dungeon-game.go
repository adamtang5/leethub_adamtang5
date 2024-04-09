import (
  "fmt"
)

func calculateMinimumHP(dungeon [][]int) int {
  m, n := len(dungeon), len(dungeon[0])
  dp := make([][]int, m)
  for i:=0;i<m;i++ {
    dp[i] = make([]int, n)
  }
  dp[m-1][n-1] = max(1, 1-dungeon[m-1][n-1])
  for i:=n-2;i>=0;i-- {
    dp[m-1][i] = max(1, dp[m-1][i+1]-dungeon[m-1][i])
  }
  for i:=m-2;i>=0;i-- {
    dp[i][n-1] = max(1, dp[i+1][n-1]-dungeon[i][n-1])
  }
  for r:=m-2;r>=0;r-- {
    for c:=n-2;c>=0;c-- {
      dp[r][c] = max(1, min(max(1, dp[r][c+1]-dungeon[r][c]), max(1, dp[r+1][c]-dungeon[r][c])))
    }
  }
  return dp[0][0]
}