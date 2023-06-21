/**
 Do not return anything, modify board in-place instead.
 */
function solveSudoku(board: string[][]): void {
  let isSolved = false
  const set: Set<number> = new Set<number>()
  const rows: Set<number>[] = new Array(9).fill(set).map(() => new Set<number>())
  const cols: Set<number>[] = new Array(9).fill(set).map(() => new Set<number>())
  const subs: Set<number>[] = new Array(9).fill(set).map(() => new Set<number>())
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] !== '.') {
        const d: number = +board[r][c]
        const subIdx:number = 3 * Math.floor(r / 3) + Math.floor(c / 3)
        rows[r].add(d)
        cols[c].add(d)
        subs[subIdx].add(d)
      }
    }
  }

  function backTrack(r: number, c: number): void {
    if (r === 9) {
      isSolved = true
      return
    }
    
    const nextR: number = r + Math.floor((c + 1) / 9)
    const nextC: number = (c + 1) % 9

    if (board[r][c] !== '.') {
      backTrack(nextR, nextC)
    } else {
      for (let d = 1; d <= 9; d++) {
        const subIdx:number = 3 * Math.floor(r / 3) + Math.floor(c / 3)
        if (!rows[r].has(d) && !cols[c].has(d) && !subs[subIdx].has(d)) {
          rows[r].add(d)
          cols[c].add(d)
          subs[subIdx].add(d)
          board[r][c] = d.toString()
          
          backTrack(nextR, nextC)
          
          if (!isSolved) {
            rows[r].delete(d)
            cols[c].delete(d)
            subs[subIdx].delete(d)
            board[r][c] = '.'
          }
        }
      }
    }
  }
  
  backTrack(0, 0)
}