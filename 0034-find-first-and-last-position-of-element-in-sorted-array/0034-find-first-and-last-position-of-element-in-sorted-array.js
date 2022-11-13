/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let ans = [-1, -1];
    let [l, r] = [0, nums.length - 1];
    let pivot = Math.floor((r + l) / 2);
    while (l <= r) {
        console.log(l, r, pivot, nums[pivot]);
        if (nums[pivot] !== target) {
            if (nums[pivot] > target) {
                r = pivot - 1;
            } else if (nums[pivot] < target) {
                l = pivot + 1;
            }
            pivot = Math.floor((r + l) / 2);
        } else {
            [l, r] = [pivot, pivot];
            while (nums[l] === target) {
                l--;
            }
            while (nums[r] === target) {
                r++;
            }
            ans = [l + 1, r - 1];
            break;
        }
    }
    return ans;
};