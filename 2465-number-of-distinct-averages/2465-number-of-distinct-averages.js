/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function(nums) {
  nums.sort((a, b) => a - b);
  const avgs = new Set();
  let [l, r] = [0, nums.length - 1];
  while (l < r) {
    avgs.add((nums[l] + nums[r]) / 2);
    l++;
    r--;
  }
  return avgs.size;
};