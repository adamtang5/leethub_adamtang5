/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
var twoSum = function(nums, target) {
  const indices = {};

  for (let i = 0; i < nums.length; i++) {
    if (indices[nums[i]] !== undefined) return [indices[nums[i]], i];
    indices[target - nums[i]] = i;
  }
};