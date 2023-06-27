/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  if (height.length === 1) return 0;
  let [ans, l, r] = [0, 0, height.length - 1];
  let [maxL, maxR] = [height[l], height[r]];
  let level = Math.min(maxL, maxR);
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
};