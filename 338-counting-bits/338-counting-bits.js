/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const ans = new Array(n+1).fill(0);
    
    for (let i = 0; i <= n; i++) {
        ans[i] = i.toString(2).split('').filter(d => d === '1').length;
    }
    
    return ans;
};