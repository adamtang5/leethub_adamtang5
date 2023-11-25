/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const tally = {};
  let ans = 0;
  nums.forEach(num => {
    if (!tally[num]) {
      if ((!tally[num + 1] || !tally[num + 1].length) &&
          (!tally[num - 1] || !tally[num - 1].length)) {
        tally[num] = [num, num];
        ans = Math.max(ans, 1);
        tally[num + 1] = [];
        tally[num - 1] = [];
      }
    } else if (tally[num] && !tally[num].length) {
      tally[num + 1] = tally[num + 1] || [];
      tally[num - 1] = tally[num - 1] || [];
      let [rMin, rMax, lMin, lMax] = [num, num, num, num];
      if (tally[num + 1] && tally[num + 1].length) [rMin, rMax] = tally[num + 1];
      if (tally[num - 1] && tally[num - 1].length) [lMin, lMax] = tally[num - 1];
      tally[num] = [lMin, rMax];
      ans = Math.max(ans, rMax - lMin + 1);
      tally[lMin] = [lMin, rMax];
      tally[rMax] = [lMin, rMax];
    }
  });
  return ans;
};