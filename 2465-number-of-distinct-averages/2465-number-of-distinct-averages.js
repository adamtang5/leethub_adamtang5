/**
 * @param {number[]} nums
 * @return {number}
 */
var distinctAverages = function(nums) {
  nums.sort((a, b) => a - b);
  const avgs = new Set();
  let min, max;
  while (nums.length) {
    min = nums.shift();
    max = nums.pop();
    avgs.add((min + max) / 2);
  }
  return avgs.size;
};