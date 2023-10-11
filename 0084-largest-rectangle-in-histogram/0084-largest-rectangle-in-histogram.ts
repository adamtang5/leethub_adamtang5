function largestRectangleArea(heights: number[]): number {
  let ans = 0
  type AuxPlate = {
    idx: number
    start: number
    height: number
  }
  const stack: AuxPlate[] = [
    {
      idx: 0,
      start: 0,
      height: heights[0]
    }
  ]
  let popped: AuxPlate
  for (let i = 1; i < heights.length; i++) {
    if (heights[i] <= stack.at(-1).height) {
      popped = stack.pop()
      ans = Math.max(ans, (popped.idx - popped.start + 1) * popped.height)
      while (stack.length && stack.at(-1).height >= heights[i]) {
        stack.at(-1).idx = popped.idx
        popped = stack.pop()
        ans = Math.max(ans, (popped.idx - popped.start + 1) * popped.height)
      }
      stack.push({
        idx: i,
        start: popped.start,
        height: heights[i],
      })
    } else {
      stack.push({
        idx: i,
        start: i,
        height: heights[i],
      })
    }
  }
  while (stack.length) {
    popped = stack.pop()
    ans = Math.max(ans, (popped.idx - popped.start + 1) * popped.height)
    if (stack.length) stack.at(-1).idx = popped.idx
  }
  return ans
}