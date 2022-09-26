/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // base cases
    if (m === 1 || n === 1) return 1;
    if (m === 2) return n;
    if (n === 2) return m;
    
    // recursive case
    return uniquePaths(m, n-1) + uniquePaths(m-1, n);
};