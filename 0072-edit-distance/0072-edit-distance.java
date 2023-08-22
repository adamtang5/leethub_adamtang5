class Solution {
  public int minDistance(String word1, String word2) {
    int l1 = word1.length();
    int l2 = word2.length();
    int[][] dp = new int[l1 + 1][l2 + 1];
    dp[l1][l2] = 0;
    for (int r = l1 - 1; r >= 0; r--) {
      dp[r][l2] = dp[r + 1][l2] + 1;
    }
    for (int c = l2 - 1; c >= 0; c--) {
      dp[l1][c] = dp[l1][c + 1] + 1;
    }
    
    for (int r = l1 - 1; r >= 0; r--) {
      for (int c = l2 - 1; c >= 0; c--) {
        int min1 = Math.min(dp[r + 1][c] + 1, dp[r][c + 1] + 1);
        if (word1.substring(r, r + 1).equals(word2.substring(c, c + 1))) {
          dp[r][c] = Math.min(min1, dp[r + 1][c + 1]);
        } else {
          dp[r][c] = Math.min(min1, dp[r + 1][c + 1] + 1);
        }
      }
    }
    return dp[0][0];
  }
}