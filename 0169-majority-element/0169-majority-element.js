/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let ans;
  let count = 0;
  for (const num of nums) {
    if (!count) {
      ans = num;
      count++;
    } else {
      count = ans === num ? count + 1 : count - 1;
    }
  }
  return ans;
};