function maxProfit(prices: number[]): number {
  let ans = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) ans += prices[i] - prices[i - 1]
  }
  return ans
}