function maxArea(height: number[]): number {
  let l = 0
  let r = height.length - 1
  let ans = (r - l) * Math.min(height[r], height[l])
  let currLeft: number
  let currRight: number
  while (l < r) {
    [currLeft, currRight] = [height[l], height[r]]
    if (height[l] <= height[r]) {
      while (l < r && height[l] <= currLeft) {
        l++
      }
    } else {
      while (l < r && height[r] <= currRight) {
        r--
      }
    }
    ans = Math.max(ans, (r - l) * Math.min(height[r], height[l]))
  }
  return ans
}
