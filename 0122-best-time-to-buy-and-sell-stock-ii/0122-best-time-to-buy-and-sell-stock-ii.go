func maxProfit(prices []int) int {
  ans, l, r := 0, 0, 1
  for r < len(prices) {
    if prices[r] >= prices[l] {
      for r < len(prices) - 1 && prices[r + 1] >= prices[r] {
        r++
      }
      ans += prices[r] - prices[l]
    }
    l = r
    r++
  }
  return ans
}