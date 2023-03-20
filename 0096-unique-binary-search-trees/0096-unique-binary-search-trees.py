class Solution:
  def numTrees(self, n: int) -> int:
    dp = dict()
    dp[0] = 1
    
    def helper(seg):
      total = 0
      for i in range(1, seg+1):
        total += dp[i-1]*dp[seg-i]
      dp[seg] = total
    
    for i in range(1, n+1):
      helper(i)
    return dp[n]