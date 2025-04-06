func maxProfit(prices []int) int {
  ans, l, r := 0, 0, 0
  for r < len(prices) {
    ans = max(ans , prices[r] - prices[l])
    if prices[r] < prices[l] {
      l = r
    }
    r++
  }
  return ans
}