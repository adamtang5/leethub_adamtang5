/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let [start, count] = [0, 0];
    for (const num of nums) {
        if (num < target) {
            start++;
        } else if (num === target) {
            count++;
        }
    }
    const ans = [];
    while (count > 0) {
        ans.unshift(start + count - 1);
        count--;
    }
    return ans;
};