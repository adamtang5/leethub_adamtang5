/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const chTally = {};
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      chTally[board[r][c]] = chTally[board[r][c]] || 0;
      chTally[board[r][c]]++;
    }
  }
  for (const ch of word) {
    if (chTally[ch] === 0) return false;
    chTally[ch]--;
  }

  const path = new Set();

  const inBound = (r, c) => {
    return r >= 0 && r < board.length && c >= 0 && c < board[0].length;
  };

  const valid = (r, c, i) => {
    return inBound(r, c) && word[i] === board[r][c] && !path.has(`${r}-${c}`);
  };

  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  const dfs = (r, c, i) => {
    if (i === word.length) return true;
    if (!valid(r, c, i)) return false;
    path.add(`${r}-${c}`);
    const ans = dirs.reduce((res, [rd, cd]) => {
      const [nr, nc] = [r + rd, c + cd];
      return res || dfs(nr, nc, i + 1);
    }, false);
    path.delete(`${r}-${c}`);
    return ans;
  };

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      if (dfs(r, c, 0)) return true;
    }
  }
  return false;
};