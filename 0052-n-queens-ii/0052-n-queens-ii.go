func totalNQueens(n int) int {
  ans := 0
  for i:=0;i<n;i++ {
    dfs([]int{i}, n, &ans)
  }
  return ans
}

func dfs(seq []int, n int, ans *int)  {
  if len(seq) == n {
    *ans++
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
