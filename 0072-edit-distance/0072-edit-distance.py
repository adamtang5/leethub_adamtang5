class Solution:
  def minDistance(self, word1: str, word2: str) -> int:
    dp = [[0]*(len(word2)+1) for _ in range(len(word1)+1)]
    for c in range(len(word2)-1, -1, -1):
      dp[-1][c] = dp[-1][c+1]+1
    for r in range(len(word1)-1, -1, -1):
      dp[r][-1] = dp[r+1][-1]+1
    
    for r in range(len(word1)-1, -1, -1):
      for c in range(len(word2)-1, -1, -1):
        if word1[r] != word2[c]:
          dp[r][c] = min(dp[r+1][c]+1, dp[r+1][c+1]+1, dp[r][c+1]+1)
        else:
          dp[r][c] = min(dp[r+1][c]+1, dp[r+1][c+1], dp[r][c+1]+1)
    return dp[0][0]