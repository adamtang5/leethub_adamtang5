class Solution {
  public int maxProfit(int[] prices) {
    int ans = 0;
    int l = 0;
    int r = 1;
    while (r < prices.length) {
      if (prices[r] >= prices[l]) {
        while (r < prices.length - 1 && prices[r + 1] >= prices[r]) r++;
        ans += prices[r]-prices[l];
      }
      l = r;
      r++;
    }
    return ans;
  }
}