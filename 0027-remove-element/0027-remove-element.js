/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let [l, r] = [0, nums.length - 1];
    while (l <= r) {
        while (l < nums.length && nums[l] !== val) {
            l++;
        }
        console.log(l);
        while (r >= 0 && nums[r] === val) {
            r--;
        }
        console.log(r);
        if (l < r) [nums[l], nums[r]] = [nums[r], nums[l]];
    }
    return l;
};