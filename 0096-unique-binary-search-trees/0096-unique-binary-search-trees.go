func numTrees(n int) int {
  dp := make(map[int]int)
  dp[0] = 1
  for i := 1; i <= n; i++ {
    helper(i, &dp)
  }
  return dp[n]
}

func helper(seg int, dp *map[int]int)  {
  total := 0
  for n := 1; n <= seg; n++ {
    total += (*dp)[n - 1] * (*dp)[seg - n]
  }
  (*dp)[seg] = total
}