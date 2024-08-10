func insert(intervals [][]int, newInterval []int) [][]int {
  i, l, lb := 0, 0, -1
  for i < len(intervals) {
    if newInterval[1] < intervals[i][0] {
      lb = i
      break
    } else if newInterval[0] <= intervals[i][1] {
      lb = i
      newInterval[0] = min(intervals[i][0], newInterval[0])
      newInterval[1] = max(intervals[i][1], newInterval[1])
      l, i = l+1, i+1
      for i < len(intervals) && newInterval[1] >= intervals[i][0] {
        newInterval[1] = max(intervals[i][1], newInterval[1])
        l, i = l+1, i+1
      }
      break
    }
    i++
  }
  if lb < 0 {
    lb = i
  }
  ans := make([][]int, len(intervals)-l+1)
  i = 0
  for i < lb {
    ans[i] = intervals[i]
    i++
  }
  ans[i] = newInterval
  i++
  for i < len(ans) {
    ans[i] = intervals[i+l-1]
    i++
  }
  return ans
}