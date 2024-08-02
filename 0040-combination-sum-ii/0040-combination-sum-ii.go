func combinationSum2(candidates []int, target int) [][]int {
  f := []int{}
  for _, n := range candidates {
    if n <= target {
      f = append(f, n)
    }
  }
  if len(f) == 0 {
    return [][]int{}
  }
  sort.Sort(sort.Reverse(sort.IntSlice(f)))
  ans := [][]int{}
  dfs(f, target, &ans, []int{})
  return ans
}

func dfs(c []int, t int, ans *[][]int, suffix []int)  {
  if t == 0 {
    *ans = append([][]int{suffix}, *ans...)
  } else if len(c) == 0 {
    return
  } else if t > 0 {
    n := 1
    for n < len(c) && c[n] == c[n-1] {
      n++
    }
    for i:=min(t/c[0], n);i>=0;i-- {
      lst := []int{}
      for j:=0;j<i;j++ {
        lst = append(lst, c[0])
      }
      lst = append(lst, suffix...)
      dfs(c[n:], t-i*c[0], ans, lst)
    }
  }
}