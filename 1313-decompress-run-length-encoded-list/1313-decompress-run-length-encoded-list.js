/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let ans = [];
    for (let i = 0; i < nums.length; i += 2) {
        const [freq, val] = [nums[i], nums[i + 1]];
        const sub = new Array(freq).fill(val);
        ans = [...ans, ...sub];
    }
    return ans;
};