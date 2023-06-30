class Solution {
  public int jump(int[] nums) {
    int ans = 0;
    int l = 0;
    int r = 0;
    int ub = 0;
    while (r < nums.length - 1) {
      for (int i = l; i <= r; i++) {
        ub = Math.max(ub, i + nums[i]);
      }
      l = r + 1;
      r = ub;
      ans++;
    }
    return ans;
  }
}