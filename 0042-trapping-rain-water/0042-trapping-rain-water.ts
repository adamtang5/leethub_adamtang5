function trap(height: number[]): number {
  if (height.length === 1) return 0
  let ans = 0
  const lBound: number[] = new Array(height.length).fill(0)
  const rBound: number[] = new Array(height.length).fill(0)
  for (let i = 1; i < lBound.length; i++) {
    lBound[i] = Math.max(lBound[i - 1], height[i - 1])
  }
  for (let i = rBound.length - 2; i >= 0; i--) {
    rBound[i] = Math.max(rBound[i + 1], height[i + 1])
  }
  for (let i = 1; i < height.length - 1; i++) {
    const level = Math.min(lBound[i], rBound[i])
    ans += Math.max(0, level - height[i])
  }
  return ans
}