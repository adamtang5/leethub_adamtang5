class Solution {
  public List<List<Integer>> generate(int numRows) {
    List<List<Integer>> ans = new ArrayList();
    List<Integer> init = new ArrayList<Integer>();
    init.add(1);
    ans.add(init);
    if (numRows == 1) return ans;
    List<Integer> secondRow = new ArrayList<Integer>();
    secondRow.add(1);
    secondRow.add(1);
    ans.add(secondRow);
    while (numRows > 2) {
      List<Integer> nextRow = new ArrayList<Integer>();
      List<Integer> prev = ans.get(ans.size() - 1);
      nextRow.add(1);
      for (int i = 1; i < prev.size(); i++) {
        nextRow.add(prev.get(i - 1) + prev.get(i));
      }
      nextRow.add(1);
      ans.add(nextRow);
      numRows--;
    }
    return ans;
  }
}