/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const isGood = arr => {
        const firstZeroIdx = arr.indexOf(0);
        if (firstZeroIdx === -1) return true;
        for (let i = firstZeroIdx; i < arr.length; i++) {
            if (arr[i] !== 0) return false;
        }
        return true;
    };
    
    const start = nums.indexOf(0);
    if (start === -1) return nums;
    let [clean, dirty] = [start, start];
    
    while (dirty < nums.length && clean < nums.length) {
        if (clean > dirty) [nums[clean], nums[dirty]] = [nums[dirty], nums[clean]];
        // if (isGood(nums)) break;
        while (dirty < nums.length && nums[dirty] !== 0) {
            dirty++;
            console.log("dirty:", dirty);
        }
        while (clean < nums.length && nums[clean] === 0) {
            clean++;
            console.log("clean:", clean);
        }
    }
    return nums;
};