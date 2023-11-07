class Solution:
  def maxProfit(self, prices: List[int]) -> int:
    ans = 0
    fw, bw = [0]*len(prices), [0]*len(prices)
    lMin, rMax = prices[0], prices[-1]
    for i in range(1, len(prices)):
      fw[i] = max(fw[i-1], prices[i]-lMin)
      lMin = min(lMin, prices[i])
    for i in range(len(prices)-2, -1, -1):
      bw[i] = max(bw[i+1], rMax-prices[i])
      rMax = max(rMax, prices[i])
    for i in range(len(prices)):
      ans = max(ans, fw[i]+bw[i])
    return ans