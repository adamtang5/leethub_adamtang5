/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] *= 2;
            nums[i + 1] = 0;
        }
    }

    let [l, r] = [0, 1];
    while (r < nums.length && l < r) {
        while (l < nums.length && nums[l] !== 0) {
            l++;
        }
        if (l === nums.length) break;
        if (l + 1 < nums.length) {
            r = l + 1;
            while (nums[r] === 0) {
                r++;
            }
            if (r === nums.length) break;
        }
        if (l < r) [nums[l], nums[r]] = [nums[r], nums[l]];
    }
    
    return nums;
};