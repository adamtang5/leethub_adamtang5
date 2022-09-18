/**
 * @param {number[]} nums
 * @return {number}
 */

/*
use Kadane's algorithm
Ask the question: what's the maximum subarray ending at this index
*/

var maxSubArray = function(nums) {
    let [prevMax, currMax, ans] = [-Infinity, -Infinity, -Infinity];
    
    nums.forEach(n => {
        prevMax = currMax;
        currMax = Math.max(n, n + prevMax);
        ans = Math.max(ans, currMax);
    });
    
    return ans;
};