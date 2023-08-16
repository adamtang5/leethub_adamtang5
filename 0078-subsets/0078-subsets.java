class Solution {
  public List<List<Integer>> subsets(int[] nums) {
    List<List<Integer>> ans = new ArrayList();
    int ub = 1 << nums.length;
    for (int i = 0; i < ub; i++) {
      List<Integer> sub = new ArrayList<Integer>();
      for (int j = 0; j < nums.length; j++) {
        int p = i & 1 << j;
        if (p > 0) sub.add(nums[j]);
      }
      ans.add(sub);
    }
    return ans;
  }
}