func longestConsecutive(nums []int) int {
  edge, occurred, ans := make(map[int]bool), make(map[int]*map[string]int), 0
  for _, num := range nums {
    _, ok1 := edge[num]
    _, ok2 := occurred[num]
    if !ok1 && !ok2 {
      _, ok3 := occurred[num + 1]
      _, ok4 := occurred[num - 1]
      if !ok3 && !ok4 {
        newState := make(map[string]int)
        newState["lb"] = num
        newState["ub"] = num
        occurred[num] = &newState
        ans = max(ans, 1)
        edge[num + 1], edge[num - 1] = true, true
      }
    } else if ok1 {
      m3, ok3 := occurred[num + 1]
      m4, ok4 := occurred[num - 1]
      if !ok3 {
        edge[num + 1] = true
      }
      if !ok4 {
        edge[num - 1] = true
      }
      lMin, rMax := num, num
      if ok3 {
        rMax = (*m3)["ub"]
      }
      if ok4 {
        lMin = (*m4)["lb"]
      }
      newState := make(map[string]int)
      newState["lb"] = lMin
      newState["ub"] = rMax
      occurred[num] = &newState
      occurred[lMin] = &newState
      occurred[rMax] = &newState
      delete(edge, num)
      ans = max(ans, rMax - lMin + 1)
    }
  }
  return ans
}