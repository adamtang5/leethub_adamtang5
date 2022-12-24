/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    const steps = new Array(nums.length).fill(Infinity);
    steps[0] = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = 1; i + j < steps.length && j <= nums[i]; j++) {
            steps[i + j] = Math.min(steps[i + j], steps[i] + 1);
        }
    }
    return steps.at(-1);
};