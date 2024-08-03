func trap(height []int) int {
  if len(height) == 1 {
    return 0
  }
  ans, l, r := 0, 0, len(height)-1
  maxL, maxR := height[l], height[r]
  level := min(maxL, maxR)
  for l < r {
    if maxL <= maxR {
      l++
      ans += max(0, level-height[l])
      maxL = max(maxL, height[l])
    } else {
      r--
      ans += max(0, level-height[r])
      maxR = max(maxR, height[r])
    }
    level = min(maxL, maxR)
  }
  return ans
}