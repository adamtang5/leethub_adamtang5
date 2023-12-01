class Solution {
  public int rob(int[] nums) {
    int[] dp = new int[nums.length];
    dp[dp.length - 1] = nums[nums.length - 1];
    if (nums.length > 1) dp[dp.length - 2] = Math.max(nums[nums.length - 2], nums[nums.length - 1]);
    for (int i = nums.length - 3; i >= 0; i--) {
      dp[i] = Math.max(nums[i] + dp[i + 2], dp[i + 1]);
    }
    return dp[0];
  }
}