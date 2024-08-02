func combinationSum(candidates []int, target int) [][]int {
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
  fmt.Println(f)
  ans := [][]int{}
  dfs(f, target, &ans, []int{})
  return ans
}

func dfs(c []int, t int, ans *[][]int, suffix []int)  {
  if t == 0 {
    *ans = append([][]int{suffix}, *ans...)
  } else if t > 0 && len(c) > 0 {
    for i:=t/c[0];i>=0;i-- {
      lst := []int{}
      for j:=0;j<i;j++ {
        lst = append(lst, c[0])
      }
      lst = append(lst, suffix...)
      dfs(c[1:], t-i*c[0], ans, lst)
    }
  }
}