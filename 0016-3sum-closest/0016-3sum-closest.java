class Solution {
  public int threeSumClosest(int[] nums, int target) {
    Arrays.sort(nums);
    int optSum = -100000;
    int l;
    int r;
    
    for (int i = 0; i < nums.length - 2; i++) {
      l = i + 1;
      r = nums.length - 1;
      while (l < r) {
        if (Math.abs(nums[i] + nums[l] + nums[r] - target) < Math.abs(optSum - target)) {
          optSum = nums[i] + nums[l] + nums[r];
        }
        if (nums[i] + nums[l] + nums[r] < target) {
          l++;
        } else if (nums[i] + nums[l] + nums[r] > target) {
          r--;
        } else {
          return target;
        }
      }
    }
    return optSum;
  }
}