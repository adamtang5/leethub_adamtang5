class Solution {
  public int minimumTotal(List<List<Integer>> triangle) {
    int level = 0;
    int left;
    int right;
    int res;
    while (level < triangle.size() - 1) {
      level++;
      for (int i = 0; i <= level; i++) {
        left = i - 1 < 0 ? 10000000 : triangle.get(level - 1).get(i - 1);
        right = i >= level ? 10000000 : triangle.get(level - 1).get(i);
        res = triangle.get(level).get(i) + Math.min(left, right);
        triangle.get(level).set(i, res);
      }
    }
    return Collections.min(triangle.get(level));
  }
}