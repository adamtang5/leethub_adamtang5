class Solution {
  public int uniquePaths(int m, int n) {
    int[][] dp = new int[m][n];
    for (int i = 0; i < m; i++) {
      for (int j = 0; j < n; j++) {
        dp[i][j] = 1;
      }
    }
    for (int r = m - 2; r >= 0; r--) {
      for (int c = n - 2; c >= 0; c--) {
        dp[r][c] = dp[r + 1][c] + dp[r][c + 1];
      }
    }
    return dp[0][0];
  }
}