/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */

var shiftGrid = function(grid, k) {
    let oneD = grid.flat();
    const shifted1D = new Array(oneD.length).fill(0);
    
    for (let i = 0; i < oneD.length; i++) {
        shifted1D[(i + k) % oneD.length] = oneD[i];
    }

    for (let i = 0; i < shifted1D.length; i++) {
        const row = Math.floor(i / grid[0].length);
        const col = i % grid[0].length;
        grid[row][col] = shifted1D[i];
    }
    return grid;
};