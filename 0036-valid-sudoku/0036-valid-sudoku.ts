function isValidSudoku(board: string[][]): boolean {
  function check9(arr: string[]): boolean {
    arr = arr.filter(cell => cell !== '.')
    arr.sort()
    
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] === arr[i]) return false
    }
    return true
  }
  
  function checkRows(): boolean {
    for (let i = 0; i < 9; i++) {
      if (!check9(board[i])) return false
    }
    return true
  }
  
  function checkCols(): boolean {
    for (let i = 0; i < 9; i++) {
      if (!check9(board.map(row => row[i]))) return false
    }
    return true
  }
  
  function checkGrids(): boolean {
    function getGrid(row: number, col: number): string[] {
      const ans: string[] = []
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          ans.push(board[row + i][col + j])
        }
      }
      return ans
    }
    
    for (let row = 0; row < 9; row += 3) {
      for (let col = 0; col < 9; col += 3) {
        if (!check9(getGrid(row, col))) return false
      }
    }
    return true
  }
  
  return checkRows() && checkCols() && checkGrids()
}