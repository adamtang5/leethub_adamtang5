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
    const spliced = flattened.splice(l, k);
    flattened.splice(0, 0, ...spliced);
    const ans = [];
    while (flattened.length) ans.push(flattened.splice(0, cols));
    return ans;
};