var (
  solved bool
  rows []map[byte]bool
  cols []map[byte]bool
  subs []map[byte]bool
)

func solveSudoku(board [][]byte)  {
  solved = false
  rows = make([]map[byte]bool, 9)
  cols = make([]map[byte]bool, 9)
  subs = make([]map[byte]bool, 9)
  
  for i:=0;i<9;i++ {
    rows[i] = map[byte]bool{}
    cols[i] = map[byte]bool{}
    subs[i] = map[byte]bool{}
  }
  for r:=0;r<9;r++ {
    for c:=0;c<9;c++ {
      cell := board[r][c]
      if cell != []byte(".")[0] {
        subIdx := 3*(r/3)+c/3
        rows[r][cell], cols[c][cell], subs[subIdx][cell] = true, true, true
      }
    }
  }
  
  backtrack(0, 0, board)
}

func backtrack(r int, c int, board [][]byte)  {
  if r == 9 {
    solved = true
    return
  }
  
  nextR, nextC, cell := r+(c+1)/9, (c+1)%9, board[r][c]
  if cell != []byte(".")[0] {
    backtrack(nextR, nextC, board)
  } else {
    for b:=[]byte("1")[0];b<=[]byte("9")[0];b++ {
      subIdx := 3*(r/3)+c/3
      _, rowsOK := rows[r][b]
      _, colsOK := cols[c][b]
      _, subsOK := subs[subIdx][b]
      if !(rowsOK || colsOK || subsOK) {
        rows[r][b] = true
        cols[c][b] = true
        subs[subIdx][b] = true
        board[r][c] = b
        
        backtrack(nextR, nextC, board)
        
        if !solved {
          delete(rows[r], b)
          delete(cols[c], b)
          delete(subs[subIdx], b)
          board[r][c] = []byte(".")[0]
        }
      }
    }
  }
}