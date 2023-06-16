class Solution {
  public int[] searchRange(int[] nums, int target) {
    int l = 0;
    int r = nums.length - 1;
    int pivot = (int) Math.floor((r + l) / (double) 2);
    int[] ans = new int[2];
    ans[0] = -1;
    ans[1] = -1;

    while (l <= r) {
      if (nums[pivot] != target) {
        if (nums[pivot] > target) {
          r = pivot - 1;
        } else {
          l = pivot + 1;
        }
        pivot = (int) Math.floor((r + l) / (double) 2);
      } else {
        l = pivot;
        r = pivot;
        while (l >= 0 && nums[l] == target) l--;
        while (r < nums.length && nums[r] == target) r++;
        ans[0] = l + 1;
        ans[1] = r - 1;
        break;
      }
    }
    return ans;
  }
}