/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const ans = Array(nums.length).fill(1);
    let currProd = 1;
    for (let i = 0; i < nums.length - 1; i++) {
        currProd *= nums[i];
        ans[i + 1] *= currProd;
    }
    currProd = 1;
    for (let i = nums.length - 1; i >= 1; i--) {
        currProd *= nums[i];
        ans[i - 1] *= currProd;
    }

    return ans;
};