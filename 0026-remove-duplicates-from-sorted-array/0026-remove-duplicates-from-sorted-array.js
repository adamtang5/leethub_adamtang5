/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const len = nums.length;
    let [l, r] = [0, 0];
    while (r < len) {
        while (nums[r] === nums[l] && r < len) {
            r++;
        }
        nums[l + 1] = nums[r];
        l++;
    }
    const k = nums.indexOf(undefined);
    return (k !== -1) ? k : len;
};