class Solution {
  public boolean canJump(int[] nums) {
    int i = 0;
    int reach = nums[0];
    while (i < reach) {
      if (reach >= nums.length - 1) {
        return true;
      } else {
        i++;
        reach = Math.max(i + nums[i], reach);
      }
    }
    return reach >= nums.length - 1;
  }
}