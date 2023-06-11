class Solution {
  public void bubbleSort(int start, int[] nums) {
    for (int i = 0; i < nums.length; i++) {
      for (int j = start; j < nums.length - i - 1; j++) {
        if (nums[j] > nums[j + 1]) {
          int temp = nums[j + 1];
          nums[j + 1] = nums[j];
          nums[j] = temp;
        }
      }
    }
  }
  
  public void nextPermutation(int[] nums) {
    if (nums.length == 1) return;
    int l = nums.length - 2;
    int r = nums.length - 1;
    if (nums[l] < nums[r]) {
      int temp = nums[r];
      nums[r] = nums[l];
      nums[l] = temp;
      return;
    } else {
      int end = nums.length - 1;
      while (l >= 0 && nums[l] >= nums[r]) {
        l--;
        r--;
      }
      if (l < 0) {
        bubbleSort(0, nums);
        return;
      }
      while (nums[end] <= nums[l]) end--;
      int temp = nums[end];
      nums[end] = nums[l];
      nums[l] = temp;
      bubbleSort(l + 1, nums);
      return;
    }
  }
}