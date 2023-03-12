/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
  const indices = {};
  let count = 0;
  for (let num of nums) {
    indices[num] = indices[num] || 0;
    count += indices[num];
    indices[num + k] = indices[num + k] || 0;
    indices[num + k]++;
    indices[num - k] = indices[num - k] || 0;
    indices[num - k]++;
  }
  return count;
};