class Solution {
  public int[] twoSum(int[] nums, int target) {
    Map indices = new HashMap();
    int[] ans = new int[2];
    for (int i = 0; i < nums.length; i++) {
      if (indices.containsKey(nums[i])) {
        ans[0] = (int) indices.get(nums[i]);
        ans[1] = i;
        break;
      }
      indices.put(target - nums[i], i);
    }
    return ans;
  }
}