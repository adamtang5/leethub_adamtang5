/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums.length === 1) return [nums];

    let ans = [];
    nums.forEach((n, i) => {
        const copy = nums.slice();
        const extracted = copy.splice(i, 1);
        permute(copy).forEach(p => {
            ans.push([extracted, ...p]);
        })
    });
    
    return ans;
};