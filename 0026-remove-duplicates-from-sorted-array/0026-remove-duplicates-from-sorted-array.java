class Solution {
  public int removeDuplicates(int[] nums) {
    int len = nums.length;
    int l = 0;
    int r = 0;
    while (r < len) {
      while (r < len && nums[r] == nums[l]) r++;
      if (r < len) nums[l + 1] = nums[r];
      l++;
    }
    return l;
  }
}