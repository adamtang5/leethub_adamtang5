class Solution {
  public int removeElement(int[] nums, int val) {
    int l = 0;
    int r = nums.length - 1;
    int temp;
    while (l <= r) {
      while (l < nums.length && nums[l] != val) l++;
      while (r >= 0 && nums[r] == val) r--;
      if (l < r) {
        temp = nums[l];
        nums[l] = nums[r];
        nums[r] = temp;
      }
    }
    return l;
  }
}