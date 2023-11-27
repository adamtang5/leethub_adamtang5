/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
  function isEdge(r: number, c: number): boolean {
    return r === 0 || r === board.length - 1 || c === 0 || c === board[0].length - 1
  }

  function inBound(r: number, c: number): boolean {
    return r >= 0 && r < board.length && c >= 0 && c < board[0].length
  }

  const edgeIsland: number[][] = []
  const dirs: number[][] = [[0, 1], [1, 0], [0, -1], [-1, 0]]

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      if (isEdge(r, c) && board[r][c] === "O") edgeIsland.push([r, c])
    }
  }

  const visited: Set<string> = new Set()
  edgeIsland.forEach(([r, c]) => {
    visited.add(`${r}-${c}`)
    const queue = [[r, c]]
    while (queue.length) {
      const [currR, currC] = queue.shift()
      dirs.forEach(([rowD, colD]) => {
        const [newR, newC] = [currR + rowD, currC + colD]
        if (inBound(newR, newC) && !visited.has(`${newR}-${newC}`) && board[newR][newC] === "O") {
          queue.push([newR, newC])
          visited.add(`${newR}-${newC}`)
        }
      })
    }
  })

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      if (!isEdge(r, c) && !visited.has(`${r}-${c}`)) board[r][c] = "X"
    }
  }
}