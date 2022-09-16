/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const [nRows, nCols] = [image.length, image[0].length];
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    const visited = new Set();
    
    const inBounds = (row, col) => {
        return row >= 0 && row < nRows && col >= 0 && col < nCols;
    };
    
    const dfs = (row, col) => {
        const scolor = image[row][col];
        
        const valid = (r, c) => {
            return inBounds(r, c) && !visited.has(`${r}-${c}`) && image[r][c] === scolor;
        };
        
        image[row][col] = color;
        visited.add(`${row}-${col}`);
        dirs.forEach(([rowDiff, colDiff]) => {
            const [newRow, newCol] = [row + rowDiff, col + colDiff];
            if (valid(newRow, newCol)) dfs(newRow, newCol);
        });
    };
    
    dfs(sr, sc);
    return image;
};