/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums.length === 1) return [nums];
    
    let ans = [];
    
    nums.forEach((n, i) => {
        let remaining = [...nums.slice(0, i), ...nums.slice(i + 1)];
        let subPerm = permute(remaining);
        subPerm.forEach(p => {
            ans.push([n, ...p]);
        })
    });
    
    return ans;
};