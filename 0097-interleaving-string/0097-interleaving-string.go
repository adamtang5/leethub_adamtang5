func isInterleave(s1 string, s2 string, s3 string) bool {
  dp := make([][]int, len(s1) + 1)
  for i := range dp {
    dp[i] = make([]int, len(s2) + 1)
  }
  queue := [][]int{[]int{0, 0}}

  for len(queue) > 0 {
    firstPair := queue[0]
    queue = queue[1:]
    x, y := firstPair[0], firstPair[1]

    if x + y == len(s3) {
      break
    }
    if x < len(s1) && s3[x + y] == s1[x] && dp[x + 1][y] == 0 {
      dp[x + 1][y] = x + y + 1
      newPair := []int{x + 1, y}
      queue = append(queue, newPair)
    }
    if y < len(s2) && s3[x + y] == s2[y] && dp[x][y + 1] == 0 {
      dp[x][y + 1] = x + y + 1
      newPair := []int{x, y + 1}
      queue = append(queue, newPair)
    }
  }
  return dp[len(s1)][len(s2)] == len(s3)
}