/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

/*
data structure: 2D array matrix to keep track of values and indices
*/

var maxSubsequence = function(nums, k) {
    let matrix = [];
    nums.forEach((num, i) => matrix.push([num, i]));
    
    matrix.sort((a, b) => b[0] - a[0]);
    matrix = matrix.slice(0, k);
    
    matrix.sort((a, b) => a[1] - b[1]);
    
    return matrix.map(([v, i]) => v);
};