class Solution:
    def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:
        m, n = len(obstacleGrid), len(obstacleGrid[0])
        if obstacleGrid[m-1][n-1] == 1:
            return 0
        dp = [[None] * n for _ in range(m)]
        def inBounds(r, c):
            return r in range(m) and c in range(n)
        def dpValue(r, c):
            return dp[r][c] if inBounds(r, c) else 0
        
        if obstacleGrid[-1][-1] == 1:
            dp[-1][-1] = 0
        else:
            dp[-1][-1] = 1
            
        for r in range(m-1, -1, -1):
            for c in range(n-1, -1, -1):
                if r != m-1 or c != n-1:
                    if obstacleGrid[r][c] == 0:
                        dp[r][c] = dpValue(r+1, c) + dpValue(r, c+1)
                    else:
                        dp[r][c] = 0
                        
        return dp[0][0]