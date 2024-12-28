func generateParenthesis(n int) []string {
  dp := map[string][]string{
    "0,0": []string{""},
    "0,1": []string{")"},
  }

  return dfs(n, n, dp)
}

func valid(o int, c int) bool {
  return c >= o && o >= 0 && c >= 0
}

func makeKey(o int, c int) string {
  return strconv.Itoa(o) + "," + strconv.Itoa(c)
}

func dfs(o int, c int, dp map[string][]string) []string {
  key := makeKey(o, c)
  val, ok := dp[key]
  if ok {
    return val
  }

  ans := []string{}
  if valid(o-1, c) {
    sub := dfs(o-1, c, dp)
    c1 := make([]string, len(sub))
    copy(c1, sub)
    for i:=0;i<len(c1);i++ {
      c1[i] = "(" + c1[i]
    }
    ans = append(ans, c1...)
  }
  if valid(o, c-1) {
    sub := dfs(o, c-1, dp)
    c2 := make([]string, len(sub))
    copy(c2, sub)
    for i:=0;i<len(c2);i++ {
      c2[i] = ")" + c2[i]
    }
    ans = append(ans, c2...)
  }
  dp[key] = ans
  return ans
}
