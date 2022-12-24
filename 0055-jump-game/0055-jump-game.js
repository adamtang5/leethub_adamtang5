/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let [i, reach] = [0, nums[0]];
    while (i < reach) {
        if (reach >= nums.length - 1) {
            return true;
        } else {
            i++;
            reach = Math.max(i + nums[i], reach);
        }
    }
    return reach >= nums.length - 1;
};