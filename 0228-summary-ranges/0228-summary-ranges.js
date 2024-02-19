/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  let [l, r] = [0, 0];
  const ans = [];
  while (l < nums.length) {
    while (r < nums.length - 1 && nums[r + 1] === nums[r] + 1) r++;
    if (l < nums.length) {
      ans.push(l === r ? nums[l].toString() : `${nums[l]}->${nums[r]}`);
      l = r + 1;
      r = l;
    }
  }
  return ans;
};