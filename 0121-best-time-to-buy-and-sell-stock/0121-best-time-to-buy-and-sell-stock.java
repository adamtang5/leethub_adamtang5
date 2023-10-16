class Solution {
  public int maxProfit(int[] prices) {
    int ans = 0;
    int l = 0;
    int r = 0;
    while (r < prices.length) {
      ans = Math.max(ans, prices[r] - prices[l]);
      if (prices[r] < prices[l]) l = r;
      r++;
    }
    return ans;
  }
}