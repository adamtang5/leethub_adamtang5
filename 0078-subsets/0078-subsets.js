/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const len = nums.length;
    const ans = [];
    for (let i = 0; i < 2 ** len; i++) {
        const sub = [];
        for (let j = 0; j < len; j++) {
            if (i & 1 << j) sub.push(nums[j]);
        }
        ans.push(sub);
    }
    return ans;
};