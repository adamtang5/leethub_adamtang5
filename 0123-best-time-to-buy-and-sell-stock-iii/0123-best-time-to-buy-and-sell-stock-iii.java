class Solution {
  public int maxProfit(int[] prices) {
    int ans = 0;
    int[] fw = new int[prices.length];
    fw[0] = 0;
    int[] bw = new int[prices.length];
    bw[bw.length - 1] = 0;
    int lMin = prices[0];
    int rMax = prices[prices.length - 1];
    for (int i = 1; i < prices.length; i++) {
      fw[i] = Math.max(fw[i - 1], prices[i] - lMin);
      lMin = Math.min(lMin, prices[i]);
    }
    for (int i = prices.length - 2; i >= 0; i--) {
      bw[i] = Math.max(bw[i + 1], rMax - prices[i]);
      rMax = Math.max(rMax, prices[i]);
    }
    for (int i = 0; i < prices.length; i++) {
      ans = Math.max(ans, fw[i] + bw[i]);
    }
    return ans;
  }
}