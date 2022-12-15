/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let [l, r, ans] = [0, height.length - 1, 0];
    while (l < r) {
        ans = Math.max(ans, (r - l) * Math.min(height[r], height[l]));
        if (height[l] <= height[r]) {
            l++;
        } else {
            r--;
        }
    }
    return ans;
};