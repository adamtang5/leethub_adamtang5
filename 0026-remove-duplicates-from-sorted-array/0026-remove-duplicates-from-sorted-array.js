/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let [l, r, len] = [0, 0, nums.length];
    while (r < len) {
        while (nums[r] === nums[l] && r < len) {
            r++;
        }
        nums[l + 1] = nums[r];
        l++;
    }
    console.log(nums);
    const k = nums.indexOf(undefined);
    return (k !== -1) ? k : len;
};