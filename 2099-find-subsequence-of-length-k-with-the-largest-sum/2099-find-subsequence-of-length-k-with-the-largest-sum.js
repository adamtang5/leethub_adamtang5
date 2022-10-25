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
    const sorted = matrix.splice(0, k).sort((a, b) => a[1] - b[1]);
    return sorted.map(el => el[0]);
};