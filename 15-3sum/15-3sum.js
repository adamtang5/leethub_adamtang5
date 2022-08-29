/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
    const ans = [];
    nums.sort((a, b) => a - b);
    let i = 0;
    while (i < nums.length - 2) {
        let [l, r] = [i + 1, nums.length - 1];
        while (l < r) {
            if (nums[i] + nums[l] + nums[r] > 0) {
                r--;
            } else if (nums[i] + nums[l] + nums[r] < 0) {
                l++;
            } else {
                ans.push([nums[i], nums[l], nums[r]]);
                while (nums[l] === nums[l+1]) {
                    l++;
                }
                l++;
            }            
        }
        while (nums[i] === nums[i+1]) {
            i++;
        }
        i++;
    }
    return ans;
};