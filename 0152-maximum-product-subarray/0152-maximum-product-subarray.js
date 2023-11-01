/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let ans = Math.max(...nums);
  let [currMin, currMax] = [1, 1];
  let temp;
  nums.forEach(num => {
    temp = currMax;
    currMax = Math.max(currMin * num, temp * num, num);
    currMin = Math.min(currMin * num, temp * num, num);
    ans = Math.max(currMax, currMin, ans);
  });
  return ans;
};