function totalNQueens(n: number): number {
  function inBound(c: number): boolean {
    return c >= 0 && c < n
  }
  
  const seqs: number[][] = []
  
  function dfs(seq: number[]): void {
    if (seq.length === n) {
      seqs.push(seq)
      return
    }
    const redSet: Set<number> = new Set(seq)
    seq.forEach((c, r) => {
      if (inBound(c + seq.length - r)) redSet.add(c + seq.length - r)
      if (inBound(c - seq.length + r)) redSet.add(c - seq.length + r)
    })
    for (let i = 0; i < n; i++) {
      if (!redSet.has(i)) dfs([...seq, i])
    }
  }

  for (let i = 0; i < n; i++) {
    dfs([i])
  }

  return seqs.length
}