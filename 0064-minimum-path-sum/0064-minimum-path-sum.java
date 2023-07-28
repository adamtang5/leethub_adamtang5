class Solution {
  public int minPathSum(int[][] grid) {
    int m = grid.length;
    int n = grid[0].length;
    int[][] dp = new int[m][n];
    for (int r = 0; r < m; r++) {
      for (int c = 0; c < n; c++) {
        dp[r][c] = 300;
      }
    }
    dp[m - 1][n - 1] = grid[m - 1][n - 1];
    for (int i = n - 2; i >= 0; i--) {
      dp[m - 1][i] = dp[m - 1][i + 1] + grid[m - 1][i];
    }
    for (int i = m - 2; i >= 0; i--) {
      dp[i][n - 1] = dp[i + 1][n - 1] + grid[i][n - 1];
    }
    for (int r = m - 2; r >= 0; r--) {
      for (int c = n - 2; c >= 0; c--) {
        dp[r][c] = Math.min(dp[r + 1][c], dp[r][c + 1]) + grid[r][c];
      }
    }
    return dp[0][0];
  }
}