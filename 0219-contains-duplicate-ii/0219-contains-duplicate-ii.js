/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  if (k < 1) return false;
  const window = {};
  for (let i = 0; i < k && i < nums.length; i++) {
    window[nums[i]] ||= 0;
    window[nums[i]]++;
    if (window[nums[i]] > 1) return true;
  }
  for (let i = k; i < nums.length; i++) {
    if (nums[i] in window) return true;
    if (window[nums[i - k]] === 1) {
      delete window[nums[i - k]];
    } else {
      window[nums[i - k]]--;
    }
    window[nums[i]] ||= 0;
    window[nums[i]]++;
  }
  return false;
};