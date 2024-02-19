/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  if (!nums.length) return nums;
  let l, r;
  const ans = [];
  nums.forEach(num => {
    if (l === undefined) {
      l = num;
      r = num;
    } else if (num === r + 1) {
      r = num;
    } else {
      if (l === r) {
        ans.push(l.toString());
      } else {
        ans.push(`${l}->${r}`);
      }
      l = num;
      r = num;
    }
  });
  if (l === r) {
    ans.push(l.toString());
  } else {
    ans.push(`${l}->${r}`);
  }

  return ans;
};