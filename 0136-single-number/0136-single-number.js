/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const tally = new Set();
  nums.forEach(num => {
    if (tally.has(num)) {
      tally.delete(num);
    } else {
      tally.add(num);
    }
  });
  return [...tally][0];
};