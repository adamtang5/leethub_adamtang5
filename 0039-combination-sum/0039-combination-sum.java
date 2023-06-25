class Solution {
  public void dfs(List<Integer> c, int t, List<List<Integer>> ans) {
    List suffix = new ArrayList<Integer>();
    dfs(c, t, ans, suffix);
  }
  
  public void dfs(List<Integer> c, int t, List<List<Integer>> ans, List<Integer> suffix) {
    if (t == 0) {
      ans.add(0, suffix);
    } else if (t > 0 && c.size() > 0) {
      int currMax = (int) c.get(0);
      for (int i = (int) Math.floor(t / (double) currMax); i >= 0; i--) {
        List lst = new ArrayList<Integer>();
        for (int j = 0; j < i; j++) {
          lst.add(currMax);
        }
        lst.addAll(suffix);
        dfs(c.subList(1, c.size()), t - i * currMax, ans, lst);
      }
    }
  }
  
  public List<List<Integer>> combinationSum(int[] candidates, int target) {
    List f = new ArrayList<Integer>();
    for (int n : candidates) {
      if (n <= target) f.add(n);
    }
    if (f.size() == 0) return new ArrayList();
    Collections.sort(f, Collections.reverseOrder());
    List ans = new ArrayList();
    dfs(f, target, ans);
    return ans;
  }
}