class Solution:
    def minPathSum(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        dp = [[float('inf')] * n for _ in range(m)]
        dp[-1][-1] = grid[-1][-1]
        for i in range(n-2, -1, -1):
            dp[-1][i] = dp[-1][i+1] + grid[-1][i]
        for i in range(m-2, -1, -1):
            dp[i][-1] = dp[i+1][-1] + grid[i][-1]
        for r in range(m-2, -1, -1):
            for c in range(n-2, -1, -1):
                dp[r][c] = grid[r][c] + min(dp[r+1][c], dp[r][c+1])
        return dp[0][0]