func getPermutation(n int, k int) string {
  seq := make([]string, n)
  for i:=1;i<=n;i++ {
    seq[i-1] = strconv.Itoa(i)
  }
  return dfs(k-1, seq, "")
}

func dfs(q int, s []string, ans string) string {
  if len(s) == 0 {
    return ans
  }
  subSize := fact(len(s)-1)
  subIdx := q/subSize
  ext := s[subIdx]
  newS := make([]string, len(s)-1)
  for i:=0;i<len(newS);i++ {
    if i < subIdx {
      newS[i] = s[i]
    } else {
      newS[i] = s[i+1]
    }
  }
  return dfs(q%subSize, newS, ans+ext)
}

func fact(n int) int {
  if n == 0 {
    return 1
  }
  return n*fact(n-1)
}