function exist(board: string[][], word: string): boolean {
  const chTally = {}
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      chTally[board[r][c]] = chTally[board[r][c]] || 0
      chTally[board[r][c]]++
    }
  }
  for (const ch of word) {
    if (chTally[ch] === 0) return false
    chTally[ch]--
  }
  
  const path: Set<string> = new Set()
  function inBound(r: number, c: number): boolean {
    return r >= 0 && r < board.length && c >= 0 && c < board[0].length
  }
  
  function valid(r: number, c: number, i: number): boolean {
    return inBound(r, c) && word[i] === board[r][c] && !path.has(`${r}-${c}`)
  }
  
  const dirs: number[][] = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  
  function dfs(r: number, c: number, i: number): boolean {
    if (i === word.length) return true
    if (!valid(r, c, i)) return false
    path.add(`${r}-${c}`)
    const ans: boolean = dirs.reduce((res, [rd, cd]) => {
      const [nr, nc] = [r + rd, c + cd]
      return res || dfs(nr, nc, i + 1)
    }, false)
    path.delete(`${r}-${c}`)
    return ans
  }
  
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      if (dfs(r, c, 0)) return true
    }
  }
  return false
}