class Solution {
  public int calculateMinimumHP(int[][] dungeon) {
    int m = dungeon.length;
    int n = dungeon[0].length;
    int[][] dp = new int[m][n];
    dp[m - 1][n - 1] = Math.max(1, 1 - dungeon[m - 1][n - 1]);
    
    for (int i = n - 2; i >= 0; i--) {
      dp[m - 1][i] = Math.max(1, dp[m - 1][i + 1] - dungeon[m - 1][i]);
    }
    
    for (int i = m - 2; i >= 0; i--) {
      dp[i][n - 1] = Math.max(1, dp[i + 1][n - 1] - dungeon[i][n - 1]);
    }
    
    for (int r = m - 2; r >= 0; r--) {
      for (int c = n - 2; c >= 0; c--) {
        dp[r][c] = Math.max(1, Math.min(Math.max(1, dp[r][c + 1] - dungeon[r][c]), Math.max(1, dp[r + 1][c] - dungeon[r][c])));
      }
    }
    return dp[0][0];
  }
}