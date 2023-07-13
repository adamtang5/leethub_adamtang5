/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  const buildBoard = coords => {
    const ans = new Array(coords.length).fill().map(() => new Array(coords.length).fill('.'));
    coords.forEach((c, r) => ans[r][c] = 'Q');
    return ans.map(row => row.join(''));
  };
  
  const inBound = c => {
    return c >= 0 && c < n;
  };
  
  const seqs = new Set();
  
  const dfs = seq => {
    if (seq.length === n) {
      seqs.add(JSON.stringify(seq));
      return;
    }
    const redSet = new Set(seq);
    seq.forEach((c, r) => {
      if (inBound(c + (seq.length - r))) redSet.add(c + (seq.length - r));
      if (inBound(c - (seq.length - r))) redSet.add(c - (seq.length - r));
    });
    for (let i = 0; i < n; i++) {
      if (!redSet.has(i)) dfs([...seq, i]);
    }
  };
  
  for (let i = 0; i < n; i++) {
    dfs([i]);
  }
  
  return [...seqs].map(s => JSON.parse(s)).map(seq => buildBoard(seq));
};