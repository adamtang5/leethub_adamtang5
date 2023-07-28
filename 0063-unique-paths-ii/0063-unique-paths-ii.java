class Solution {
  public boolean inBounds(int r, int c, int[][] grid) {
    return r >= 0 && r < grid.length && c >= 0 && c < grid[0].length;
  }
  
  public int dpValue(int r, int c, int[][] grid, int[][] dp) {
    return inBounds(r, c, grid) ? dp[r][c] : 0;
  }
  
  public int uniquePathsWithObstacles(int[][] obstacleGrid) {
    int m = obstacleGrid.length;
    int n = obstacleGrid[0].length;
    if (obstacleGrid[m - 1][n - 1] == 1) return 0;
    int[][] dp = new int[m][n];
    dp[m - 1][n - 1] = obstacleGrid[m - 1][n - 1] == 1 ? 0 : 1;
    
    for (int r = m - 1; r >= 0; r--) {
      for (int c = n - 1; c >= 0; c--) {
        if (r != m - 1 || c != n - 1) {
          dp[r][c] = obstacleGrid[r][c] == 0 ? dpValue(r + 1, c, obstacleGrid, dp) + dpValue(r, c + 1, obstacleGrid, dp) : 0;
        }
      }
    }
    return dp[0][0];
  }
}