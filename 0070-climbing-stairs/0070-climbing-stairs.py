class Solution:
    def climbStairs(self, n: int) -> int:
        dp = dict()
        dp[1] = 1
        dp[2] = 2
        for x in range(3, n+1):
            dp[x] = dp[x-1]+dp[x-2]
        return dp[n]