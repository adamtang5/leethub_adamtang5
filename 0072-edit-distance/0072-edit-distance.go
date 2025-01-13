func minDistance(word1 string, word2 string) int {
  l1, l2 := len(word1), len(word2)
  dp := make([][]int, l1 + 1)
  for i := range dp {
    dp[i] = make([]int, l2 + 1)
  }
  dp[l1][l2] = 0
  for r:=l1-1;r>=0;r-- {
    dp[r][l2] = dp[r+1][l2]+1
  }
  for c:=l2-1;c>=0;c-- {
    dp[l1][c] = dp[l1][c+1]+1
  }

  for r:=l1-1;r>=0;r-- {
    for c:=l2-1;c>=0;c-- {
      min1 := min(dp[r+1][c]+1, dp[r][c+1]+1)
      if word1[r] == word2[c] {
        dp[r][c] = min(min1, dp[r+1][c+1])
      } else {
        dp[r][c] = min(min1, dp[r+1][c+1]+1)
      }
    }
  }
  return dp[0][0]
}