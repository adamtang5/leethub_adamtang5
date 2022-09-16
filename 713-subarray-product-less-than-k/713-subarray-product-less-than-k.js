/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let [l, r, ans, prod] = [0, 0, 0, 1];
    while (r < nums.length) {
        prod *= nums[r];
        while (prod >= k && l < r) {
            prod /= nums[l];
            l++;
        }
        if (prod < k) ans += r - l + 1;
        r++;
    }
    return ans;
};
