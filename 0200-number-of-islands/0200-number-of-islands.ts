function numIslands(grid: string[][]): number {
  let ans = 0
  let visited: Set<string> = new Set()
  const dirs: number[][] = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  
  function inBounds(row: number, col: number): boolean {
    return row >= 0 && row < grid.length && col >= 0 && col < grid[0].length
  }
  
  function valid(row: number, col: number): boolean {
    return inBounds(row, col) && !visited.has(`${row}-${col}`) && grid[row][col] === '1'
  }
  
  function dfs(row: number, col: number): number {
    if (!valid(row, col)) return 0
    
    visited.add(`${row}-${col}`)
    for (let [rowDiff, colDiff] of dirs) {
      const newRow = row + rowDiff
      const newCol = col + colDiff
      dfs(newRow, newCol)
    }
    return 1
  }
  
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (!visited.has(`${row}-${col}`)) ans += dfs(row, col)
    }
  }
  return ans
}