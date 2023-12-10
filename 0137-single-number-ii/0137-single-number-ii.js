/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let [ones, twos] = [0, 0];
  nums.forEach(num => {
    ones = (ones ^ num) & (~twos);
    twos = (twos ^ num) & (~ones);
  });
  return ones;
};