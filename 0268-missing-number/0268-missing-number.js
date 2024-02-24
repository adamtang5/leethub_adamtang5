/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const numSet = new Set(nums);
  for (let n = 0; n <= nums.length; n++) {
    if (!numSet.has(n)) return n;
  }
};