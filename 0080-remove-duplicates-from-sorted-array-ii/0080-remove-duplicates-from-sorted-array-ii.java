class Solution {
  public int removeDuplicates(int[] nums) {
    int l = -1;
    int r = 0;
    while (r < nums.length) {
      if (r + 1 < nums.length && nums[r] == nums[r + 1]) {
        nums[l + 1] = nums[r];
        nums[l + 2] = nums[r + 1];
        l += 2;
        r++;
        while (r < nums.length && nums[r - 1] == nums[r]) r++;
      } else {
        nums[l + 1] = nums[r];
        l++;
        r++;
      }
      if (r == nums.length) break;
    }
    return l + 1;
  }
}