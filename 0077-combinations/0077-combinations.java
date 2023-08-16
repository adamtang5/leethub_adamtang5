class Solution {
  public void backtrack(int start, List<Integer> combo, List<List<Integer>> ans, int n, int k) {
    if (combo.size() == k) {
      ans.add(new ArrayList<Integer>(combo));
      return;
    }
    
    for (int i = start; i <= n; i++) {
      combo.add(i);
      backtrack(i + 1, combo, ans, n, k);
      combo.remove(combo.size() - 1);
    }
  }
  
  public List<List<Integer>> combine(int n, int k) {
    List<List<Integer>> ans = new ArrayList();
    backtrack(1, new ArrayList<Integer>(), ans, n, k);
    return ans;
  }
}