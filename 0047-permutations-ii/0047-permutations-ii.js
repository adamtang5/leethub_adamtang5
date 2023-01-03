/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    if (nums.length === 1) return [nums];
    
    const uniqPerms = new Set();
    const ans = [];
    
    nums.forEach((num, i) => {
        let copy = nums.slice();
        const ext = copy.splice(i, 1);
        permuteUnique(copy).forEach(p => {
            const cand = [ext, ...p];
            if (!uniqPerms.has(JSON.stringify(cand))) {
                ans.push(cand);
                uniqPerms.add(JSON.stringify(cand));
            }
        });
    });
    
    return ans;
};