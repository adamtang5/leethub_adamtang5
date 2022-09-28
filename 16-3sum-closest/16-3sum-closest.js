/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    optSum = -Infinity;
    
    for (let i = 0; i < nums.length - 2; i++) {
        let [l, r] = [i + 1, nums.length - 1];
        while (l < r) {
            if (Math.abs(nums[i] + nums[l] + nums[r] - target) < Math.abs(optSum - target)) {
                optSum = nums[i] + nums[l] + nums[r];
            }
            if (nums[l] + nums[r] < target - nums[i]) {
                l++;
            } else if (nums[l] + nums[r] > target - nums[i]) {
                r--;
            } else {
                return target;
            }
        }
    }
    
    return optSum;
};