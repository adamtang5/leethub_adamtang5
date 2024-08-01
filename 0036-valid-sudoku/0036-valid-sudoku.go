func isValidSudoku(board [][]byte) bool {
  return checkRows(board) && checkCols(board) && checkGrids(board)
}

func checkRows(board [][]byte) bool {
  for r:=0;r<9;r++ {
    if !check9(board[r]) {
      return false
    }
  }
  return true
}

func checkCols(board [][]byte) bool {
  for c:=0;c<9;c++ {
    col := []byte{}
    for r:=0;r<9;r++ {
      col = append(col, board[r][c])
    }
    if !check9(col) {
      return false
    }
  }
  return true
}

func check9(list []byte) bool {
  hits := map[byte]bool{}
  for _, b := range list {
    if b != []byte(".")[0] {
      if d, ok := hits[b]; ok && d {
        return false
      } else {
        hits[b] = true
      }
    }
  }
  return true
}

func checkGrids(board [][]byte) bool {
  for r:=0;r<9;r+=3 {
    for c:=0;c<9;c+=3 {
      if !check9(getGrid(board, r, c)) {
        return false
      }
    }
  }
  return true
}

func getGrid(board [][]byte, r int, c int) []byte {
  ans := []byte{}
  for i:=0;i<3;i++ {
    for j:=0;j<3;j++ {
      ans = append(ans, board[r+i][c+j])
    }
  }
  return ans
}