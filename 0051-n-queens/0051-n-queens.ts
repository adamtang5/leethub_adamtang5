function solveNQueens(n: number): string[][] {
  function buildBoard(coords: number[]): string[] {
    const ans: string[][] = new Array(coords.length).fill([]).map(() => new Array(coords.length).fill('.'))
    coords.forEach((c, r) => ans[r][c] = 'Q')
    return ans.map(row => row.join(''))
  }
  
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
      if (inBound(c + (seq.length - r))) redSet.add(c + (seq.length - r))
      if (inBound(c - (seq.length - r))) redSet.add(c - (seq.length - r))
    })
    for (let i = 0; i < n; i++) {
      if (!redSet.has(i)) dfs([...seq, i])
    }
  }

  for (let i = 0; i < n; i++) {
    dfs([i])
  }
  return seqs.map(seq => buildBoard(seq))
}