class Solution {
  public int coinChange(int[] coins, int amount) {
    int[] dp = new int[amount + 1];
    dp[0] = 0;
    for (int i = 1; i < dp.length; i++) dp[i] = 10001;
    for (int i = 1; i <= amount; i++) {
      for (int coin : coins) {
        if (i >= coin) dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
    if (dp[amount] == 10001) return -1;
    return dp[amount];
  }
}