/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  let isSolved = false;
  const rows = new Array(9).fill().map(() => new Set());
  const cols = new Array(9).fill().map(() => new Set());
  const subs = new Array(9).fill().map(() => new Set());
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] !== '.') {
        const d = +board[r][c];
        const subIdx = 3 * Math.floor(r / 3) + Math.floor(c / 3);
        rows[r].add(d);
        cols[c].add(d);
        subs[subIdx].add(d);
      }
    }
  }
  
  const backTrack = (r, c) => {
    if (r === 9) {
      isSolved = true;
      return;
    }
    
    let nextR = r + Math.floor((c + 1) / 9);
    let nextC = (c + 1) % 9;
    
    if (board[r][c] !== '.') {
      backTrack(nextR, nextC);
    } else {
      for (let d = 1; d <= 9; d++) {
        const subIdx = 3 * Math.floor(r / 3) + Math.floor(c / 3);
        if (!rows[r].has(d) && !cols[c].has(d) && !subs[subIdx].has(d)) {
          rows[r].add(d);
          cols[c].add(d);
          subs[subIdx].add(d);
          board[r][c] = d.toString();
          
          backTrack(nextR, nextC);
          
          if (!isSolved) {
            rows[r].delete(d);
            cols[c].delete(d);
            subs[subIdx].delete(d);
            board[r][c] = '.';
          }
        }
      }
    }
  };
  
  backTrack(0, 0);
};