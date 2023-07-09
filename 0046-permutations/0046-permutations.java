class Solution {
  public List<List<Integer>> permute(int[] nums) {
    List numsList = new ArrayList<Integer>();
    for (int n : nums) {
      numsList.add(n);
    }
    return permute(numsList);
  }
  
  public List<List<Integer>> permute(List<Integer> numsList) {
    List ans = new ArrayList();
    if (numsList.size() == 1) {
      ans.add(numsList);
    } else {
      for (int i = 0; i < numsList.size(); i++) {
        List copy = new ArrayList<Integer>(numsList);
        int extracted = (int) copy.get(i);
        copy.remove(i);
        List<List<Integer>> permuted = permute(copy);
        for (List<Integer> p : permuted) {
          List<Integer> combined = new ArrayList<Integer>();
          combined.add(extracted);
          combined.addAll(p);
          ans.add(combined);
        }
      }
    }
    
    return ans;
  }
}