/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
  const indices = {};
  let count = 0;
  nums.forEach((num, i) => {
    indices[num] = indices[num] || [];
    count += indices[num].length;
    indices[num + k] = indices[num + k] || [];
    indices[num + k].push(i);
    indices[num - k] = indices[num - k] || [];
    indices[num - k].push(i);
  });
  return count;
};