/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const start = nums.indexOf(0);
    if (start === -1) return nums;
    let [clean, dirty] = [start, start];
    
    while (dirty < nums.length && clean < nums.length) {
        if (clean > dirty) [nums[clean], nums[dirty]] = [nums[dirty], nums[clean]];
        while (dirty < nums.length && nums[dirty] !== 0) {
            dirty++;
        }
        while (clean < nums.length && nums[clean] === 0) {
            clean++;
        }
    }
    return nums;
};