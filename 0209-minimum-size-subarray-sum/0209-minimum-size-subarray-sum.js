/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let [minLen, currSum, l] = [Infinity, 0, 0];
    for (let r = 0; r < nums.length; r++) {
        currSum += nums[r];
        while (currSum >= target) {
            minLen = Math.min(minLen, r - l + 1);
            currSum -= nums[l];
            l++;
        }
    }
    return minLen === Infinity ? 0 : minLen;
};