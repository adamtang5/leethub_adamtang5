class Solution:
  def calculateMinimumHP(self, dungeon: List[List[int]]) -> int:
    m, n = len(dungeon), len(dungeon[0])
    dp = [[0]*n for _ in range(m)]
    dp[-1][-1] = max(1, 1-dungeon[-1][-1])
    for i in range(n-2, -1, -1):
      dp[-1][i] = max(1, dp[-1][i+1]-dungeon[-1][i])
    for i in range(m-2, -1, -1):
      dp[i][-1] = max(1, dp[i+1][-1]-dungeon[i][-1])
    for r in range(m-2, -1, -1):
      for c in range(n-2, -1, -1):
        dp[r][c] = max(1, min(max(1, dp[r][c+1]-dungeon[r][c]), max(1, dp[r+1][c]-dungeon[r][c])))
    return dp[0][0]