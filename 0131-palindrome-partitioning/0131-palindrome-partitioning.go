func partition(s string) [][]string {
  ans, part := [][]string{}, []string{}
  dfs(0, s, &ans, &part)
  return ans
}

func dfs(i int, s string, ans *[][]string, part *[]string)  {
  if i >= len(s) {
    clone := make([]string, len(*part))
    copy(clone, *part)
    *ans = append(*ans, clone)
    return
  }
  for j := i; j < len(s); j++ {
    if isPali(s, i, j) {
      *part = append(*part, s[i:j + 1])
      dfs(j + 1, s, ans, part)
      *part = (*part)[:len(*part) - 1]
    }
  }
}

func isPali(s string, l int, r int) bool {
  for l < r {
    if s[l] != s[r] {
      return false
    }
    l, r = l + 1, r - 1
  }
  return true
}