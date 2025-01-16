func combine(n int, k int) [][]int {
  invert := func(combo []int, n int) []int {
    ans := []int{}
    for i:=1;i<=n;i++ {
      if !slices.Contains(combo, i) {
        ans = append(ans, i)
      }
    }
    return ans
  }

  if k == 1 {
    ans := make([][]int, n)
    for i := range ans {
      ans[i] = []int{i + 1}
    }
    return ans
  } else if k == n {
    ans := make([][]int, 1)
    for i:=0;i<n;i++ {
      ans[0] = append(ans[0], i + 1)
    }
    return ans
  } else if k <= n - k {
    ans, reduced := [][]int{}, combine(n, k - 1)
    for _, combo := range reduced {
      for s:=combo[len(combo)-1]+1;s<=n;s++ {
        newCombo := make([]int, len(combo)+1)
        copy(newCombo, combo)
        newCombo[len(combo)] = s
        ans = append(ans, newCombo)
      }
    }
    return ans
  } else {
    ans, reduced := [][]int{}, combine(n, n - k)
    for _, combo := range reduced {
      ans = append(ans, invert(combo, n))
    }
    return ans
  }
  return [][]int{}
}