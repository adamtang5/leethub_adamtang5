class Solution:
    def getDescentPeriods(self, prices: List[int]) -> int:
        l = r = ans = 0
        while r < len(prices):
            ans += r - l + 1
            r += 1
            if r < len(prices) and prices[r] != prices[r-1] - 1:
                l = r
        return ans