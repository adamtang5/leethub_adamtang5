class Solution {
  public int searchInsert(int[] nums, int target) {
    if (target < nums[0]) return 0;
    if (target > nums[nums.length - 1]) return nums.length;
    int l = 0;
    int r = nums.length - 1;
    int pivot = (int) Math.floor((r + l) / (double) 2);
    while (pivot >= 0 && pivot + 1 < nums.length && (nums[pivot] > target || nums[pivot + 1] <= target)) {
      if (nums[pivot] > target) {
        r = pivot - 1;
      } else {
        l = pivot + 1;
      }
      pivot = (int) Math.floor((r + l) / (double) 2);
    }
    return nums[pivot] == target ? pivot : pivot + 1;
  }
}