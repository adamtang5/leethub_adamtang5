func maxProfit(prices []int) int {
  ans, fw, bw := 0, make([]int, len(prices)), make([]int, len(prices))
  fw[0], bw[len(bw) - 1] = 0, 0
  lMin, rMax := prices[0], prices[len(prices) - 1]
  for i := 1; i < len(prices); i++ {
    fw[i] = max(fw[i - 1], prices[i] - lMin)
    lMin = min(lMin, prices[i])
  }
  for i := len(prices) - 2; i >= 0; i-- {
    bw[i] = max(bw[i + 1], rMax - prices[i])
    rMax = max(rMax, prices[i])
  }
  for i := 0; i < len(prices); i++ {
    ans = max(ans, fw[i] + bw[i])
  }
  return ans
}