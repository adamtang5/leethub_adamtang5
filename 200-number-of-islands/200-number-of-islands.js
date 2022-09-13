/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const [nRows, nCols] = [grid.length, grid[0].length];
    let [ans, visited] = [0, new Set()];
    
    const inBounds = (row, col) => {
        return row >= 0 && row < nRows && col >= 0 && col < nCols;
    };
    
    const valid = (row, col) => {
        return inBounds(row, col) &&
            !visited.has(`${row}-${col}`) &&
            grid[row][col] === "1";
    };
    
    const dfs = (row, col) => {
        if (!valid(row, col)) return 0;
        
        visited.add(`${row}-${col}`);
        const fundDirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
        fundDirs.forEach(([rowDiff, colDiff]) => {
            const [newRow, newCol] = [row + rowDiff, col + colDiff];
            dfs(newRow, newCol);
        });
        return 1;
    };
    
    for (let row = 0; row < nRows; row++) {
        for (let col = 0; col < nCols; col++) {
            if (!visited.has(`${row}-${col}`)) {
                ans += dfs(row, col);
            }
        }
    }
    return ans;
};