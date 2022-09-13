/**
 * @param {number[][]} grid
 * @return {number}
 */

/*
use recursive dfs helper function to return island size and update visitedSet
*/

var maxAreaOfIsland = function(grid) {
    const [numRows, numCols] = [grid.length, grid[0].length];
    const visited = new Set();
    let maxSize = 0;
    
    const inBounds = (row, col) => {
        return row >= 0 && row < numRows && col >= 0 && col < numCols;
    };
    
    const valid = (row, col) => {
        return inBounds(row, col) && !visited.has(`${row}-${col}`) && grid[row][col] === 1;
    }
    
    const _dfs = (row, col) => {
        if (!valid(row, col)) return 0;
        visited.add(`${row}-${col}`);
        return 1 +
            _dfs(row + 1, col) +
            _dfs(row - 1, col) +
            _dfs(row, col + 1) +
            _dfs(row, col - 1);
    };
    
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            if (valid(row, col)) {
                maxSize = Math.max(maxSize, _dfs(row, col));
            }
        }
    }
    
    return maxSize;
};