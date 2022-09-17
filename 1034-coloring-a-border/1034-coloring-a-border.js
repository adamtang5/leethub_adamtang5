/**
 * @param {number[][]} grid
 * @param {number} row
 * @param {number} col
 * @param {number} color
 * @return {number[][]}
 */
var colorBorder = function(grid, row, col, color) {
    const [nRows, nCols, scolor] = [grid.length, grid[0].length, grid[row][col]];
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const visited = new Set();
    const borderCells = [];
    
    const inBounds = (r, c) => {
        return r >= 0 && r < nRows && c >= 0 && c < nCols;
    };
    
    const onEdge = (r, c) => {
        return r === 0 || r + 1 === nRows || c === 0 || c + 1 === nCols;
    };
    
    const colorEdge = (r, c) => {
        const scolor = grid[r][c];
        for (let [dr, dc] of dirs) {
            const [newR, newC] = [r + dr, c + dc];
            if (inBounds(newR, newC) && grid[newR][newC] !== scolor) return true;
        }
        return false;
    };
    
    const isBorder = (r, c) => onEdge(r, c) || colorEdge(r, c);
    
    const valid = (r, c) => inBounds(r, c) && !visited.has(`${r}-${c}`) && grid[r][c] === scolor;
    
    const dfs = (r, c) => {
        if (visited.has(`${r}-${c}`) || !inBounds(r, c)) return;
        visited.add(`${r}-${c}`);
        if (isBorder(r, c)) borderCells.push([r, c]);
        for (let [dr, dc] of dirs) {
            const [newR, newC] = [r + dr, c + dc];
            if (valid(newR, newC)) dfs(newR, newC);
        }
    };
    
    dfs(row, col);
    borderCells.forEach(([r, c]) => grid[r][c] = color);
    return grid;
};