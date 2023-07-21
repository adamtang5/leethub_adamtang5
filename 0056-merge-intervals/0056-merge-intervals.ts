function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0])
  const ans: number[][] = []
  let [currStart, currEnd] = intervals[0]
  for (let i = 1; i < intervals.length; i++) {
    const [newStart, newEnd] = intervals[i]
    if (newStart <= currEnd) {
      currEnd = Math.max(currEnd, newEnd)
    } else {
      ans.push([currStart, currEnd])
      currStart = newStart
      currEnd = newEnd
    }
  }
  ans.push([currStart, currEnd])
  return ans
}