func combine(n int, k int) [][]int {
  ans := &[][]int{}
  backtrack(1, &[]int{}, ans, n, k)
  return *ans
}

func backtrack(start int, combo *[]int, ans *[][]int, n int, k int)  {
  if len(*combo) == k {
    cp := make([]int, len(*combo))
    copy(cp, *combo)
    *ans = append(*ans, cp)
    return
  }

  for i:=start;i<=n;i++ {
    *combo = append(*combo, i)
    backtrack(i + 1, combo, ans, n, k)
    cp := make([]int, len(*combo)-1)
    copy(cp, *combo)
    *combo = cp
  }
}