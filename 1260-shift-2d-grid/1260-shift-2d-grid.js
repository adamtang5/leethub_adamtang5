/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */

var shiftGrid = function(grid, k) {
    const cols = grid[0].length;
    let flattened = grid.flat();
    k %= flattened.length;
    l = flattened.length - k;
    flattened.splice(0, 0, ...flattened.splice(l, k));
    const ans = [];
    while (flattened.length) ans.push(flattened.splice(0, cols));
    return ans;
};