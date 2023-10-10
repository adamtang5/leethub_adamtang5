class Solution {
  public List<Integer> getRow(int rowIndex) {
    List<Integer> ans = new ArrayList<Integer>();
    if (rowIndex == 0) {
      ans.add(1);
      return ans;
    }
    List<Integer> prevRow = getRow(rowIndex - 1);
    int l;
    int r;
    for (int i = 0; i <= prevRow.size(); i++) {
      l = i == 0 ? 0 : prevRow.get(i - 1);
      r = i == prevRow.size() ? 0 : prevRow.get(i);
      ans.add(l + r);
    }
    return ans;
  }
}