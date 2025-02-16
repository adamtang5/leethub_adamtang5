func subsetsWithDup(nums []int) [][]int {
  sort.Ints(nums)
  tallies := [][]int{}
  tallies = append(tallies, []int{nums[0], 1})

  for i := 1; i < len(nums); i++ {
    if nums[i] == tallies[len(tallies) - 1][0] {
      tallies[len(tallies) - 1][1]++
    } else {
      tallies = append(tallies, []int{nums[i], 1})
    }
  }

  keys, counts := []int{}, []int{}
  for i := range tallies {
    keys = append(keys, tallies[i][0])
    counts = append(counts, tallies[i][1])
  }
  ans := [][]int{}

  for target := 0; target <= len(nums); target++ {
    cCopy := make([]int, len(counts))
    copy(cCopy, counts)
    dfs(target, &cCopy, len(nums), &ans, &keys, 0, &[]int{})
  }
  return ans
}

func dfs(target int, tallies *[]int, total int, ans *[][]int, keys *[]int, idx int, res *[]int)  {
  if target > total {
    return
  }
  if target == 0 {
    *ans = append(*ans, *res)
    return
  }
  curr := (*tallies)[0]
  *tallies = (*tallies)[1:]
  for part := min(curr, target); part >= 0; part-- {
    newRes := []int{}
    for i := 0; i < len(*res); i++ {
      newRes = append(newRes, (*res)[i])
    }
    for i := 0; i < part; i++ {
      newRes = append(newRes, (*keys)[idx])
    }
    tCopy := make([]int, len(*tallies))
    copy(tCopy, *tallies)
    dfs(target - part, &tCopy, total - curr, ans, keys, idx + 1, &newRes)
  }
}