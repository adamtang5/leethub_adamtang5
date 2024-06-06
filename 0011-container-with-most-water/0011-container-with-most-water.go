func maxArea(height []int) int {
  l, r := 0, len(height)-1
  ans := (r-l)*min(height[r], height[l])
  var currLeft int
  var currRight int
  for l < r {
    currLeft, currRight = height[l], height[r]
    if height[l] <= height[r] {
      for l < r && height[l] <= currLeft {
        l++
      }
    } else {
      for l < r && height[r] <= currRight {
        r--
      }
    }
    ans = max(ans, (r-l)*min(height[r], height[l]))
  }
  return ans
}