/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let [l, r] = [0, nums.length - 1];
  let maxIdx;
  if (nums[l] <= nums[r]) {
    return nums[l];
  } else {
    maxIdx = Math.floor((l + r) / 2);
    while (l <= r && nums[maxIdx + 1] > nums[maxIdx]) {
      if (nums[maxIdx] > nums[0]) {
        l = maxIdx + 1;
      } else if (nums[maxIdx] < nums[0]) {
        r = maxIdx - 1;
      } else {
        l++;
      }
      maxIdx = Math.floor((l + r) / 2);
    }
    return nums[maxIdx + 1];
  }
};