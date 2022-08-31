/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    if (nums.length < 2) return false;
    const prefixMods = {};
    prefixMods[0] = prefixMods[0] || [];
    prefixMods[0].push(-1);
    let currMod = 0;
    for (let i = 0; i < nums.length; i++) {
        currMod += nums[i];
        currMod %= k;
        if (prefixMods[currMod] !== undefined && prefixMods[currMod].some(idx => idx < i - 1)) return true;
        prefixMods[currMod] = prefixMods[currMod] || [];
        prefixMods[currMod].push(i);
        // console.log(prefixMods);
    }
    return false;
};