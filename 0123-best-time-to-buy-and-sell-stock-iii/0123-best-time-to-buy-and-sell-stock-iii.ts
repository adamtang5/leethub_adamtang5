function maxProfit(prices: number[]): number {
  let ans = 0
  const fw: number[] = new Array(prices.length).fill(0)
  const bw: number[] = new Array(prices.length).fill(0)
  let lMin = prices[0]
  let rMax = prices.at(-1)
  for (let i = 1; i < prices.length; i++) {
    fw[i] = Math.max(fw[i - 1], prices[i] - lMin)
    lMin = Math.min(lMin, prices[i])
  }
  for (let i = prices.length - 2; i >= 0; i--) {
    bw[i] = Math.max(bw[i + 1], rMax - prices[i])
    rMax = Math.max(rMax, prices[i])
  }
  for (let i = 0; i < prices.length; i++) {
    ans = Math.max(ans, fw[i] + bw[i])
  }
  return ans
}