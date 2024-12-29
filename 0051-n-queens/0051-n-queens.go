func solveNQueens(n int) [][]string {
  ans := [][]string{}
  for i:=0;i<n;i++ {
    dfs([]int{i}, n, &ans)
  }
  return ans
}

func dfs(seq []int, n int, ans *[][]string)  {
  if len(seq) == n {
    *ans = append(*ans, buildBoard(seq))
    return
  }
  redSet := map[int]bool{}
  for _, s := range seq {
    redSet[s] = true
  }
  for r:=0;r<len(seq);r++ {
    if inBound(seq[r]+len(seq)-r, n) {
      redSet[seq[r]+len(seq)-r] = true
    }
    if inBound(seq[r]-len(seq)+r, n) {
      redSet[seq[r]-len(seq)+r] = true
    }
  }
  for i:=0;i<n;i++ {
    newSeq := append(seq, i)
    _, ok := redSet[i]
    if !ok {
      dfs(newSeq, n, ans)
    }
  }
  return
}

func inBound(c int, n int) bool {
  return c>=0 && c<n
}

func buildBoard(coords []int) []string {
  board := make([][]string, len(coords))
  for i:=0;i<len(coords);i++ {
    board[i] = make([]string, len(coords))
    for j:=0;j<len(coords);j++ {
      board[i][j] = "."
    }
  }
  for r:=0;r<len(coords);r++ {
    board[r][coords[r]] = "Q"
  }
  ans := []string{}
  for r:=0;r<len(coords);r++ {
    ans = append(ans, strings.Join(board[r], ""))
  }
  return ans
}
