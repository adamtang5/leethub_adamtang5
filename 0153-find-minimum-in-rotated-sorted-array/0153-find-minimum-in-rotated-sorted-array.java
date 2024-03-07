class Solution {
  public int findMin(int[] nums) {
    int l = 0;
    int r = nums.length - 1;
    int maxIdx;
    if (nums[l] <= nums[r]) return nums[l];
    maxIdx = (l + r) / 2;
    while (l <= r && maxIdx < nums.length - 1 && nums[maxIdx + 1] > nums[maxIdx]) {
      if (nums[maxIdx] > nums[0]) {
        l = maxIdx + 1;
      } else if (nums[maxIdx] < nums[0]) {
        r = maxIdx - 1;
      } else {
        l++;
      }
      maxIdx = (l + r) / 2;
    }
    return nums[maxIdx + 1];
  }
}