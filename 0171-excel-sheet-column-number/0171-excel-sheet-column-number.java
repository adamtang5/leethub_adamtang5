class Solution {
  public int titleToNumber(String columnTitle) {
    List<Integer> codes = new ArrayList<Integer>();
    for (int i = 0; i < columnTitle.length(); i++) {
      codes.add((int) columnTitle.charAt(i) - (int) 'A' + 1);
    }
    int n = 0;
    int ans = 0;
    int popped;
    while (!codes.isEmpty()) {
      popped = codes.remove(codes.size() - 1);
      ans += popped * (int) Math.pow(26, n++);
    }
    return ans;
  }
}