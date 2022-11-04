/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function(grid) {
    const onDiag = (r, c) => {
        return r === c || r + c + 1 === grid.length;
    }
    
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid.length; c++) {
            if (onDiag(r, c) && grid[r][c] === 0 || !onDiag(r, c) && grid[r][c] !== 0) return false;
        }
    }
    return true;
};