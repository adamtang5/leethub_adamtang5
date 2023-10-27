class Solution:
  def maxProfit(self, prices: List[int]) -> int:
    ans, l, r = 0, 0, 1
    while r < len(prices):
      if prices[r] >= prices[l]:
        while r < len(prices)-1 and prices[r+1] >= prices[r]:
          r += 1
        ans += prices[r]-prices[l]
      l = r
      r += 1
    return ans