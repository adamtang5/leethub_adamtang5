class Solution:
  def isInterleave(self, s1: str, s2: str, s3: str) -> bool:
    dp = [[0] * (len(s2)+1) for _ in range(len(s1)+1)]
    queue = [[0, 0]]
    while len(queue):
      x, y = queue.pop(0)
      if x+y == len(s3):
        break
      if x < len(s1) and s3[x+y] == s1[x] and dp[x+1][y] == 0:
        dp[x+1][y] = x+y+1
        queue.append([x+1, y])
      if y < len(s2) and s3[x+y] == s2[y] and dp[x][y+1] == 0:
        dp[x][y+1] = x+y+1
        queue.append([x, y+1])
    
    return dp[len(s1)][len(s2)] == len(s3)