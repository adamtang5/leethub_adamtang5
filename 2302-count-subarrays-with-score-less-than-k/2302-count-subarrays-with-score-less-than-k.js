/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    let [l, r, ans, sum] = [0, 0, 0, 0];
    while (r < nums.length) {
        sum += nums[r];
        while (sum * (r - l + 1) >= k) {
            sum -= nums[l];
            l++;
        }
        ans += r - l + 1;
        r++;
    }
    return ans;
};