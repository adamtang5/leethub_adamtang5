/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

var checkSubarraySum = function(nums, k) {
    if (nums.length < 2) return false;
    const prefixMods = {};
    prefixMods[0] = -1;
    let currMod = 0;
    for (let i = 0; i < nums.length; i++) {
        currMod += nums[i];
        currMod %= k;
        if (prefixMods[currMod] !== undefined && prefixMods[currMod] < i - 1) return true;
        if (prefixMods[currMod] === undefined) prefixMods[currMod] = i;
    }
    return false;
};
