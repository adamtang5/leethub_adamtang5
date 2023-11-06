class Solution {
  public void rotate(int[] nums, int k) {
    k %= nums.length;
    int[] temp = Arrays.copyOfRange(nums, nums.length - k, nums.length);
    for (int i = nums.length - 1; i - k >= 0; i--) {
      nums[i] = nums[i - k];
    }
    for (int i = 0; i < temp.length; i++) {
      nums[i] = temp[i];
    }
  }
}