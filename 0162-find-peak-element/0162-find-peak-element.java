class Solution {
  public int findPeakElement(int[] nums) {
    if (nums.length == 1) return 0;
    int l = 0;
    int r = nums.length - 1;
    int m = (l + r) / 2;
    int ans = m;
    if (nums[l + 1] < nums[l]) return l;
    if (nums[r - 1] < nums[r]) return r;
    while (l < r) {
      m = (l + r) / 2;
      if (nums[m] > nums[m - 1] && nums[m] > nums[m + 1]) {
        ans = m;
        break;
      } else if (nums[m] < nums[m - 1]) {
        r = m;
      } else {
        l = m;
      }
    }
    return ans;
  }
}