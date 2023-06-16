class Solution {
  public int search(int[] nums, int target) {
    int l = 0;
    int r = nums.length - 1;
    int maxIdx;
    if (nums[l] < nums[r]) {
      maxIdx = r;
    } else {
      maxIdx = (int) Math.floor((r + l) / (double) 2);
      while (l <= r && maxIdx < nums.length - 1 && nums[maxIdx + 1] > nums[maxIdx]) {
        if (nums[maxIdx] > nums[0]) {
          l = maxIdx + 1;
        } else if (nums[maxIdx] < nums[0]) {
          r = maxIdx - 1;
        } else {
          l++;
        }
        maxIdx = (int) Math.floor((r + l) / (double) 2);
      }
    }
    
    if (maxIdx < nums.length - 1) {
      if (target > nums[0]) {
        l = 0;
        r = maxIdx;
      } else if (target < nums[0]) {
        l = maxIdx + 1;
        r = nums.length - 1;
      } else {
        return 0;
      }
    }
    
    int pivot = (int) Math.floor((r + l) / (double) 2);
    while (l <= r && pivot >= 0 && pivot < nums.length && nums[pivot] != target) {
      if (nums[pivot] > target) {
        r = pivot - 1;
      } else if (nums[pivot] < target) {
        l = pivot + 1;
      }
      pivot = (int) Math.floor((r + l) / (double) 2);
    }
    
    if (l > r) return -1;
    if (nums[pivot] == target) return pivot;
    return 0;
  }
}