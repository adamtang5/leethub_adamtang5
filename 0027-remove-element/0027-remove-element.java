class Solution {
  public int removeElement(int[] nums, int val) {
    int behind = 0;
    int ahead = 0;
    while (ahead < nums.length) {
      while (ahead < nums.length && nums[ahead] == val) ahead++;
      while (ahead < nums.length && nums[ahead] != val) {
        nums[behind] = nums[ahead];
        behind++;
        ahead++;
      }
    }
    return behind;
  }
}