class Solution {
  public List<Integer> invert(List<Integer> combo, int n) {
    List<Integer> ans = new ArrayList<Integer>();
    for (int i = 1; i <= n; i++) {
      if (!combo.contains(i)) ans.add(i);
    }
    return ans;
  }
  
  public List<List<Integer>> combine(int n, int k) {
    List<List<Integer>> ans = new ArrayList();
    if (k == 1) {
      for (int i = 1; i <= n; i++) {
        List<Integer> single = new ArrayList<Integer>();
        single.add(i);
        ans.add(single);
      }
    } else if (k == n) {
      List<Integer> all = new ArrayList<Integer>();
      for (int i = 1; i <= n; i++) {
        all.add(i);
      }
      ans.add(all);
    } else if (k <= n - k) {
      List<List<Integer>> reduced = combine(n, k - 1);
      for (List<Integer> combo : reduced) {
        for (int s = combo.get(combo.size() - 1) + 1; s <= n; s++) {
          List<Integer> newCombo = new ArrayList<Integer>();
          newCombo.addAll(combo);
          newCombo.add(s);
          ans.add(newCombo);
        }
      }
    } else {
      List<List<Integer>> reduced = combine(n, n - k);
      return reduced.stream()
        .map(combo -> invert(combo, n))
        .collect(Collectors.toList());
    }
    
    return ans;
  }
}