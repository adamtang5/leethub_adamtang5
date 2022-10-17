/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) {
        return nums[0] === val ? 0 : 1;
    }
    let [l, r] = [0, nums.length - 1];
    while (l < r) {
        while (nums[l] !== val && l < nums.length) {
            l++;
        }
        console.log(l);
        while (nums[r] === val && r >= 0) {
            r--;
        }
        console.log(r);
        if (l < r) [nums[l], nums[r]] = [nums[r], nums[l]];
    }
    return l;
};