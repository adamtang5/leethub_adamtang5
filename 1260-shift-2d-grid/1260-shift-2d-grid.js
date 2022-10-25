/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */

var shiftGrid = function(grid, k) {
    const cols = grid[0].length;
    const flattened = grid.flat();
    k %= flattened.length;
    k = flattened.length - k;
    const shifted = [...flattened.slice(k), ...flattened.slice(0, k)];
    const ans = [];
    while (shifted.length) ans.push(shifted.splice(0, cols));
    return ans;
};