func merge(intervals [][]int) [][]int {
  sort.Slice(intervals, func(i, j int) bool {
    return intervals[i][0] < intervals[j][0]
  })
  ans, currStart, currEnd := [][]int{}, intervals[0][0], intervals[0][1]
  for i:=1;i<len(intervals);i++ {
    newStart, newEnd := intervals[i][0], intervals[i][1]
    if newStart <= currEnd {
      currEnd = max(currEnd, newEnd)
    } else {
      ans = append(ans, []int{currStart, currEnd})
      currStart, currEnd = newStart, newEnd
    }
  }
  ans = append(ans, []int{currStart, currEnd})
  return ans
}