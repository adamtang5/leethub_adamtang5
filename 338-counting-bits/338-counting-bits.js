/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    if (n === 0) return [0];
    const ans = new Array(n+1).fill(0);
    let offset = 1;
    
    for (let i = 1; i <= n; i++) {
        if (i === offset * 2) {
            offset = i;
        }
        ans[i] = 1 + ans[i - offset];
    }
    
    return ans;
};