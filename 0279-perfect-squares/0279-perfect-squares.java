class Solution {
  public int numSquares(int n) {
    List<Integer> squares = new ArrayList<Integer>();
    int b = 1;
    while (b * b <= n) {
      squares.add(b * b);
      b++;
    }
    int[] dp = new int[n + 1];
    dp[0] = 0;
    for (int i = 1; i < dp.length; i++) {
      dp[i] = n + 1;
    }
    for (int i = 1; i <= n; i++) {
      for (int sq : squares) {
        if (i >= sq) dp[i] = Math.min(dp[i], dp[i - sq] + 1);
      }
    }
    return dp[n];
  }
}