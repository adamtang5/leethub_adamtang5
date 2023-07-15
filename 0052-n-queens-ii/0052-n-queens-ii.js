/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  const inBound = c => {
    return c >= 0 && c < n;
  };
  
  const seqs = [];
  
  const dfs = seq => {
    if (seq.length === n) {
      seqs.push(seq);
      return;
    }
    const redSet = new Set(seq);
    seq.forEach((c, r) => {
      if (inBound(c + seq.length - r)) redSet.add(c + seq.length - r);
      if (inBound(c - seq.length + r)) redSet.add(c - seq.length + r);
    });
    for (let i = 0; i < n; i++) {
      if (!redSet.has(i)) dfs([...seq, i]);
    }
  };
  
  for (let i = 0; i < n; i++) {
    dfs([i]);
  }
  
  return seqs.length;
};