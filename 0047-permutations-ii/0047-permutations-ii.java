class Solution {
  public List<List<Integer>> permuteUnique(int[] nums) {
    List numsList = new ArrayList<Integer>();
    for (int n : nums) {
      numsList.add(n);
    }
    return permuteUnique(numsList);
  }
  
  public List<List<Integer>> permuteUnique(List<Integer> numsList) {
    List ans = new ArrayList();
    if (numsList.size() == 1) {
      ans.add(numsList);
    } else {
      Set uniqPerms = new HashSet();
      List<List<Integer>> dupe = new ArrayList();
      for (int i = 0; i < numsList.size(); i++) {
        List copy = new ArrayList<Integer>(numsList);
        int extracted = (int) copy.get(i);
        copy.remove(i);
        List<List<Integer>> permuted = permuteUnique(copy);
        for (List<Integer> p : permuted) {
          List<Integer> combined = new ArrayList<Integer>();
          combined.add(extracted);
          combined.addAll(p);
          dupe.add(combined);
        }
      }
      for (List<Integer> d : dupe) {
        String dStr = d.toString();
        if (!uniqPerms.contains(dStr)) {
          ans.add(d);
          uniqPerms.add(dStr);
        }
      }
    }
    
    return ans;
  }
}