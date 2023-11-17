function numIslands(grid: string[][]): number {
  if (!grid.length) return 0
  let ans = 0
  let visited: Set<string> = new Set()
  const dirs: number[][] = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  
  function inBounds(row: number, col: number): boolean {
    return row >= 0 && row < grid.length && col >= 0 && col < grid[0].length
  }
  
  function valid(row: number, col: number): boolean {
    return inBounds(row, col) && !visited.has(`${row}-${col}`) && grid[row][col] === '1'
  }
  
  function bfs(row: number, col: number): void {
    const queue: number[][] = [[row, col]]
    visited.add(`${row}-${col}`)
    while (queue.length) {
      const [currRow, currCol] = queue.shift()
      dirs.forEach(([rowDiff, colDiff]) => {
        const [newRow, newCol] = [currRow + rowDiff, currCol + colDiff]
        if (valid(newRow, newCol)) {
          queue.push([newRow, newCol])
          visited.add(`${newRow}-${newCol}`)
        }
      })
    }
  }
  
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (valid(row, col)) {
        bfs(row, col)
        ans++
      }
    }
  }
  return ans
}