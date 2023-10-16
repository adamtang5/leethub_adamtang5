function maxProfit(prices: number[]): number {
  let ans = 0
  let l = 0
  let r = 1
  while (r < prices.length) {
    ans = Math.max(ans, prices[r] - prices[l])
    if (prices[r] < prices[l]) l = r
    r++
  }
  return ans
}