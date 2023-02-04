/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const tally = new Array(3).fill(0);
    nums.forEach(n => tally[n]++);
    
    let [n, i] = [0, 0];
    while (i < nums.length) {
        if (tally[n] > 0) {
            nums[i] = n;
            tally[n]--;
            i++;
        } else {
            n++;
        }
    }
};