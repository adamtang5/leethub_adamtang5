func maxProfit(prices []int) int {
  ans := 0
  for i := 1; i < len(prices); i++ {
    if prices[i] > prices[i - 1] {
      ans += prices[i] - prices[i - 1]
    }
  }
  return ans
}