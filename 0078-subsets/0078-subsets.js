/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const ans = [];
  for (let i = 0; i < 2 ** nums.length; i++) {
    const sub = [];
    for (let j = 0; j < nums.length; j++) {
      if (i & 1 << j) sub.push(nums[j]);
    }
    ans.push(sub);
  }
  return ans;
};