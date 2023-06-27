class Solution {
  public int trap(int[] height) {
    if (height.length == 1) return 0;
    int ans = 0;
    int level;
    int[] lBound = new int[height.length];
    lBound[0] = 0;
    for (int i = 1; i < lBound.length; i++) {
      lBound[i] = Math.max(lBound[i - 1], height[i - 1]);
    }
    int[] rBound = new int[height.length];
    rBound[rBound.length - 1] = 0;
    for (int i = rBound.length - 2; i >= 0; i--) {
      rBound[i] = Math.max(rBound[i + 1], height[i + 1]);
    }
    for (int i = 1; i < height.length - 1; i++) {
      level = Math.min(lBound[i], rBound[i]);
      ans += Math.max(0, level - height[i]);
    }
    return ans;
  }
}