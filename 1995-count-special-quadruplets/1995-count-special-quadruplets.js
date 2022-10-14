/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function(nums) {
    let count = 0;
    for (let a = 0; a < nums.length - 3; a++) {
        for (let b = a + 1; b < nums.length - 2; b++) {
            for (let c = b + 1; c < nums.length - 1; c++) {
                for (let d = c + 1; d < nums.length; d++) {
                    if (nums[a] + nums[b] + nums[c] === nums[d]) count++;
                }
            }
        }
    }
    return count;
};