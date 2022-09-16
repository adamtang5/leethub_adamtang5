/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let [l, r, ans, prod] = [0, 0, 0, nums[0]];
    while (r < nums.length && l <= r) {
        console.log(prod);
        if (prod < k) {
            ans += r - l + 1;
            r++;
            prod *= nums[r];
        } else if (l < r) {
            prod /= nums[l];
            l++;
        } else if (l === r) {
            r++;
            prod *= nums[r];
        }
    }
    return ans;
};