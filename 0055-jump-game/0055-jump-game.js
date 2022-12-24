/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let [i, currLimit] = [0, 0 + nums[0]];
    while (i < currLimit) {
        if (currLimit >= nums.length - 1) {
            return true;
        } else {
            i++;
            currLimit = Math.max(i + nums[i], currLimit);
        }
    }
    return currLimit >= nums.length - 1;
};