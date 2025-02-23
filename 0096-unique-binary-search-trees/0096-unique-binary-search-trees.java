class Solution {
  public void helper(int seg, Map<Integer, Integer> dp) {
    int total = 0;
    for (int n = 1; n <= seg; n++) {
      total += dp.get(n - 1) * dp.get(seg - n);
    }
    dp.put(seg, total);
  }
  
  public int numTrees(int n) {
    Map dp = new HashMap<Integer, Integer>();
    dp.put(0, 1);
    for (int i = 1; i <= n; i++) helper(i, dp);
    return (int) dp.get(n);
  }
}