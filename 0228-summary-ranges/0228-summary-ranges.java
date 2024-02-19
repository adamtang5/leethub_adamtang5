class Solution {
  public List<String> summaryRanges(int[] nums) {
    int l = 0;
    int r = 0;
    List<String> ans = new ArrayList<String>();
    String next;
    while (l < nums.length) {
      while (r < nums.length - 1 && nums[r + 1] == nums[r] + 1) r++;
      if (l < nums.length) {
        next = l == r ? String.valueOf(nums[l]) : String.valueOf(nums[l]) + "->" + String.valueOf(nums[r]);
        ans.add(next);
        l = r + 1;
        r = l;
      }
    }
    return ans;
  }
}