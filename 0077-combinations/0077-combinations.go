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

  ans := [][]int{}
  if k == 1 {
    for i:=1;i<=n;i++ {
      ans = append(ans, []int{i})
    }
  } else if k == n {
    el := []int{}
    for i:=1;i<=n;i++ {
      el = append(el, i)
    }
    ans = append(ans, el)
  } else if k <= n - k {
    reduced := combine(n, k - 1)
    for _, combo := range reduced {
      for s:=combo[len(combo)-1]+1;s<=n;s++ {
        newCombo := make([]int, len(combo)+1)
        copy(newCombo, combo)
        newCombo[len(combo)] = s
        ans = append(ans, newCombo)
      }
    }
  } else {
    reduced := combine(n, n - k)
    for _, combo := range reduced {
      ans = append(ans, invert(combo, n))
    }
  }
  return ans
}