/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  const isEdge = (r, c) => {
    return r === 0 || r === board.length - 1 || c === 0 || c === board[0].length - 1;
  };
  
  const inBound = (r, c) => {
    return r >= 0 && r < board.length && c >= 0 && c < board[0].length;
  }
  
  const edgeIsland = [];
  const safeSet = new Set();
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  board.forEach((row, r) => {
    row.forEach((val, c) => {
      if (isEdge(r, c) && val === "O") {
        edgeIsland.push([r, c]);
        safeSet.add(`${r}-${c}`);
      }
    });
  });
  
  const visited = new Set();
  edgeIsland.forEach(([r, c]) => {
    visited.add(`${r}-${c}`);
    const queue = [[r, c]];
    while (queue.length) {
      const [currR, currC] = queue.shift();
      dirs.forEach(([rowD, colD]) => {
        const [newR, newC] = [currR + rowD, currC + colD];
        if (inBound(newR, newC) && !visited.has(`${newR}-${newC}`) && board[newR][newC] === "O") {
          queue.push([newR, newC]);
          visited.add(`${newR}-${newC}`);
        }
      });
    }
  });
  
  board.forEach((row, r) => {
    row.forEach((val, c) => {
      if (!isEdge(r, c) && !visited.has(`${r}-${c}`)) board[r][c] = "X";
    });
  });
};