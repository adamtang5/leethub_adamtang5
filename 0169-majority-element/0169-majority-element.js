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
      if (ans === num) {
        count++;
      } else {
        count--;
      }
    }
  }
  return ans;
};