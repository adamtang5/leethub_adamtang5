/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let [clean, dirty] = [0, 0];
  while (dirty < nums.length) {
    while (dirty < nums.length && nums[dirty] === val) dirty++;
    while (dirty < nums.length && nums[dirty] !== val) {
      nums[clean] = nums[dirty];
      clean++;
      dirty++;
    }
  }
  return clean;
};