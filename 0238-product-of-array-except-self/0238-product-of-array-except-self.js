/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const prefix = Array(nums.length);
    prefix[0] = 1;
    for (let i = 1; i < prefix.length; i++) {
        prefix[i] = prefix[i - 1] * nums[i - 1];
    }
    
    const suffix = Array(nums.length);
    suffix[suffix.length - 1] = 1;
    for (let i = suffix.length - 2; i >= 0; i--) {
        suffix[i] = suffix[i + 1] * nums[i + 1];
    }

    const ans = Array(nums.length);
    for (let i = 0; i < ans.length; i++) {
        ans[i] = prefix[i] * suffix[i];
    }

    return ans;
};