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
      for (let digit = 1; digit <= 9; digit++) {
        const subIdx = 3 * Math.floor(r / 3) + Math.floor(c / 3);
        if (!rows[r].has(digit) && !cols[c].has(digit) && !subs[subIdx].has(digit)) {
          rows[r].add(digit);
          cols[c].add(digit);
          subs[subIdx].add(digit);
          board[r][c] = digit.toString();
          
          backTrack(nextR, nextC);
          
          if (!isSolved) {
            rows[r].delete(digit);
            cols[c].delete(digit);
            subs[subIdx].delete(digit);
            board[r][c] = '.';
          }
        }
      }
    }
  };
  
  backTrack(0, 0);
};