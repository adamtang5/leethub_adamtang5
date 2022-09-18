/**
 * @param {number[]} nums
 * @return {number}
 */

/*
use Kadane's algorithm
Ask the question: what's the maximum subarray ending at this index
*/

var maxSubArray = function(nums) {
    const runningMax = new Array(nums.length).fill(0);
    
    nums.forEach((n, i) => {
        if (i === 0) {
            runningMax[i] = n;
        } else {
            runningMax[i] = Math.max(n, n + runningMax[i - 1]);
        }
    });
    
    return Math.max(...runningMax);
};