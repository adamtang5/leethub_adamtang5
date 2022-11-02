/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates = candidates.filter(c => c <= target);
    if (!candidates.length) return [];
    candidates.sort((a, b) => b - a);
    const ans = [];
    
    const dfs = (c, t, suffix=[]) => {
        if (t === 0) {
            ans.unshift(suffix);
        } else if (!c.length) {
            return;
        } else if (t > 0) {
            let currMax = c[0];
            let n = 1;
            while (c[n] === c[n - 1]) {
                n++;
            }
            console.log(n, ans);
            for (let i = Math.min(Math.floor(t / currMax), n); i >= 0; i--) {
                dfs(c.slice(n), t - i * currMax, [...new Array(i).fill(currMax), ...suffix]);
            }
        }
    };
    
    dfs(candidates, target);
    return ans;
};