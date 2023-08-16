class Solution {
  public List<List<Integer>> subsets(int[] nums) {
    List<List<Integer>> ans = new ArrayList();
    int p;
    for (int i = 0; i < 1 << nums.length; i++) {
      List<Integer> sub = new ArrayList<Integer>();
      for (int j = 0; j < nums.length; j++) {
        p = i & 1 << j;
        if (p > 0) sub.add(nums[j]);
      }
      ans.add(sub);
    }
    return ans;
  }
}