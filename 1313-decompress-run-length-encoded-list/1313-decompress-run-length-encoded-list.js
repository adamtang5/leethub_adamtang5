/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let [ans, freq, val] = [[], 0, 0];
    for (let i = 0; i < nums.length; i += 2) {
        [freq, val] = [nums[i], nums[i + 1]];
        ans = ans.concat(new Array(freq).fill(val));
    }
    return ans;
};