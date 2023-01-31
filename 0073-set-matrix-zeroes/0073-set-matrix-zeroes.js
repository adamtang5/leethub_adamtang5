/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const [rows, cols] = [new Set(), new Set()];
    matrix.forEach((row, r) => {
        row.forEach((cell, c) => {
            if (cell === 0) {
                rows.add(r);
                cols.add(c);
            }
        });
    });
    
    [...rows].forEach(r => {
        for (c = 0; c < matrix[0].length; c++) {
            matrix[r][c] = 0;
        }
    });
    [...cols].forEach(c => {
        for (r = 0; r < matrix.length; r++) {
            matrix[r][c] = 0;
        }
    });
};