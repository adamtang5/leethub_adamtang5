/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let [minLen, currSum, l, r] = [Infinity, 0, 0, 0];
    while (r < nums.length) {
        if (minLen < Infinity) {
            currSum -= nums[l];
            l++;
        }
        while (r < nums.length && currSum < target) {
            currSum += nums[r];
            r++;
        }
        if (r < nums.length || currSum >= target) {
            minLen = Math.min(minLen, r - l);
        }
    }
    while (l < r && currSum >= target) {
        currSum -= nums[l];
        l++;
        if (currSum >= target) minLen = Math.min(minLen, r - l);
    }
    return minLen === Infinity ? 0 : minLen;
};