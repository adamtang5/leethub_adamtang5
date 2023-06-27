class Solution {
  public int trap(int[] height) {
    if (height.length == 1) return 0;
    int ans = 0;
    int l = 0;
    int r = height.length - 1;
    int maxL = height[l];
    int maxR = height[r];
    int level = Math.min(maxL, maxR);
    while (l < r) {
      if (maxL <= maxR) {
        l++;
        ans += Math.max(0, level - height[l]);
        maxL = Math.max(maxL, height[l]);
      } else {
        r--;
        ans += Math.max(0, level - height[r]);
        maxR = Math.max(maxR, height[r]);
      }
      level = Math.min(maxL, maxR);
    }
    return ans;
  }
}