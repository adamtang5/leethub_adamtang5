/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    const [nRows, nCols] = [grid.length, grid[0].length];
    let ans = 0;
    const visited = new Set();
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    
    const inBounds = (row, col) => {
        return row >= 0 && row < nRows && col >= 0 && col < nCols;
    };
    
    const isLand = (row, col) => {
        return inBounds(row, col) && grid[row][col] === 1;
    };
    
    const dfs = (row, col) => {
        visited.add(`${row}-${col}`);
        dirs.forEach(([rowDiff, colDiff]) => {
            const [newRow, newCol] = [row + rowDiff, col + colDiff];
            if (isLand(newRow, newCol) && !visited.has(`${newRow}-${newCol}`)) {
                dfs(newRow, newCol);
            } else if (!isLand(newRow, newCol)) {
                ans++;
            }
        });
    };
    
    for (let row = 0; row < nRows; row++) {
        for (let col = 0; col < nCols; col++) {
            if (isLand(row, col)) {
                dfs(row, col);
                return ans;
            }
        }
    }
};