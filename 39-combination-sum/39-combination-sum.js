/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates = candidates.filter(n => n <= target);
    if (!candidates.length) return [];
    
    candidates.sort((a, b) => b - a);
    // console.log(candidates, target);
    
    const ans = [];
    
    const dfs = (c, t, start=0, suffix=[]) => {
        // console.log(c, t, start, suffix);
        if (start > t) return null;
        if (start === t) {
            ans.unshift(suffix);
            return suffix;
        }
        c = c.slice();
        let currMax = c.shift();
        for (let i = Math.floor((t - start) / currMax); i >= 0; i--) {
            dfs(c, t, start + currMax * i, [...new Array(i).fill(currMax), ...suffix]);
        }
        
    };
    
    dfs(candidates, target);
    
    return ans;
};