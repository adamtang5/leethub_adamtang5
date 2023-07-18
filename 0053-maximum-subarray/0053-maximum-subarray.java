class Solution {
  public int maxSubArray(int[] nums) {
    int prevMax = -10001;
    int currMax = -10001;
    int ans = -10001;
    for (int n : nums) {
      prevMax = currMax;
      currMax = Math.max(n, n + prevMax);
      ans = Math.max(ans, currMax);
    }
    return ans;
  }
}