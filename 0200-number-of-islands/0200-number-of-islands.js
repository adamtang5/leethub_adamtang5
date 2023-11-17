/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let ans = 0;
  let visited = new Set();
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  const inBounds = (row, col) => {
    return row >= 0 && row < grid.length && col >= 0 && col < grid[0].length;
  };

  const valid = (row, col) => {
    return inBounds(row, col) && !visited.has(`${row}-${col}`) && grid[row][col] === "1";
  };

  const dfs = (row, col, dirs) => {
    if (!valid(row, col)) return 0;

    visited.add(`${row}-${col}`);
    for (const [rowDiff, colDiff] of dirs) {
      dfs(row + rowDiff, col + colDiff, dirs);
    }
    return 1;
  };

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (!visited.has(`${row}-${col}`)) ans += dfs(row, col, dirs);
    }
  }
  return ans;
};