class Solution {
  public void dfs(List<Integer> c, int t, List<List<Integer>> ans) {
    List suffix = new ArrayList<Integer>();
    dfs(c, t, ans, suffix);
  }
  
  public void dfs(List<Integer> c, int t, List<List<Integer>> ans, List<Integer> suffix) {
    if (t == 0) {
      ans.add(0, suffix);
    } else if (c.size() == 0) {
      return;
    } else if (t > 0) {
      int currMax = (int) c.get(0);
      int n = 1;
      while (n < c.size() && c.get(n) == c.get(n - 1)) n++;
      for (int i = Math.min((int) Math.floor(t / (double) currMax), n); i >= 0; i--) {
        List lst = new ArrayList<Integer>();
        for (int j = 0; j < i; j++) lst.add(currMax);
        lst.addAll(suffix);
        dfs(c.subList(n, c.size()), t - i * currMax, ans, lst);
      }
    }
  }
  
  public List<List<Integer>> combinationSum2(int[] candidates, int target) {
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