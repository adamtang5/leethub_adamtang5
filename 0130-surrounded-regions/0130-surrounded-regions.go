func solve(board [][]byte)  {
  dirs := [][]int{
    []int{0, 1},
    []int{1, 0},
    []int{0, -1},
    []int{-1, 0},
  }

  edgeIsland := [][]int{}
  for r := 0; r < len(board); r++ {
    for c := 0; c < len(board[0]); c++ {
      if isEdge(r, c, &board) && board[r][c] == byte('O') {
        edgeIsland = append(edgeIsland, []int{r, c})
      }
    }
  }

  visited := make(map[string]bool)
  for _, curr := range edgeIsland {
    r, c := curr[0], curr[1]
    key := string(r) + "-" + string(c)
    visited[key] = true
    queue := [][]int{curr}

    for len(queue) > 0 {
      first := queue[0]
      queue = queue[1:]
      currR, currC := first[0], first[1]
      for i := 0; i < len(dirs); i++ {
        rowD, colD := dirs[i][0], dirs[i][1]
        newR := currR + rowD
        newC := currC + colD
        key := string(newR) + "-" + string(newC)
        _, ok := visited[key]
        if inbound(newR, newC, &board) && !ok && board[newR][newC] == byte('O') {
          queue = append(queue, []int{newR, newC})
          visited[key] = true
        }
      }
    }
  }

  for r := 0; r < len(board); r++ {
    for c := 0; c < len(board[0]); c++ {
      _, ok := visited[string(r) + "-" + string(c)]
      if !isEdge(r, c, &board) && !ok {
        board[r][c] = byte('X')
      }
    }
  }
}

func isEdge(r int, c int, board *[][]byte) bool {
  return r == 0 || r == len(*board) - 1 || c == 0 || c == len((*board)[0]) - 1
}

func inbound(r int, c int, board *[][]byte) bool {
  return r >= 0 && r < len(*board) && c >= 0 && c < len((*board)[0])
}