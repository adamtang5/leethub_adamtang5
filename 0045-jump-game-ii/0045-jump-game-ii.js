/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let [ans, l, r, ub] = [0, 0, 0, 0];
  while (r < nums.length - 1) {
    for (let i = l; i <= r; i++) {
      ub = Math.max(ub, i + nums[i]);
    }
    l = r + 1;
    r = ub;
    ans++;
  }
  return ans;
};