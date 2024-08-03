func trap(height []int) int {
  if len(height) == 1 {
    return 0
  }
  ans, level, lBound := 0, 0, make([]int, len(height))
  for i:=1;i<len(lBound);i++ {
    lBound[i] = max(lBound[i-1], height[i-1])
  }
  rBound := make([]int, len(height))
  for i:=len(rBound)-2;i>=0;i-- {
    rBound[i] = max(rBound[i+1], height[i+1])
  }
  for i:=1;i<len(height)-1;i++ {
    level = min(lBound[i], rBound[i])
    ans += max(0, level-height[i])
  }
  return ans
}