function maxProfit(prices: number[]): number {
  let ans: number = 0
  let l: number = 0
  let r: number = 1
  while (r < prices.length) {
    if (prices[r] >= prices[l]) {
      while (r < prices.length - 1 && prices[r + 1] >= prices[r]) r++
      ans += prices[r] - prices[l]
    }
    l = r
    r++
  }
  return ans
}