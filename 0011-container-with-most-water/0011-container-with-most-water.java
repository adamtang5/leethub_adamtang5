class Solution {
  public int area(int l, int r, int[] height) {
    return (r - l) * Math.min(height[l], height[r]);
  }
  
  public int maxArea(int[] height) {
    int l = 0;
    int r = height.length - 1;
    int ans = area(l, r, height);
    int currLeft;
    int currRight;
    while (l < r) {
      currLeft = height[l];
      currRight = height[r];
      if (height[l] <= height[r]) {
        while (l < r && height[l] <= currLeft) {
          l++;
        }
      } else {
        while (l < r && height[r] <= currRight) {
          r--;
        }
      }
      ans = Math.max(ans, area(l, r, height));
    }
    return ans;
  }
}