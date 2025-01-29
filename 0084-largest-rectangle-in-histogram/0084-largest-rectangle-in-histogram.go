type plate struct {
  i int
  s int
  h int
}

func largestRectangleArea(heights []int) int {
  init := plate{
    i: 0,
    s: 0,
    h: heights[0],
  }
  stack := []plate{}
  stack = append(stack, init)
  ans := 0
  var p plate
  for i := 1; i < len(heights); i++ {
    if heights[i] <= stack[len(stack) - 1].h {
      p = stack[len(stack) - 1]
      stack = stack[:len(stack) - 1]
      ans = max(ans, (p.i - p.s + 1) * p.h)
      for len(stack) > 0 && stack[len(stack) - 1].h >= heights[i] {
        stack[len(stack) - 1].i = p.i
        p = stack[len(stack) - 1]
        stack = stack[:len(stack) - 1]
        ans = max(ans, (p.i - p.s + 1) * p.h)
      }
      stack = append(stack, plate{
        i: i,
        s: p.s,
        h: heights[i],
      })
    } else {
      stack = append(stack, plate{
        i: i,
        s: i,
        h: heights[i],
      })
    }
  }
  for len(stack) > 0 {
    p = stack[len(stack) - 1]
    stack = stack[:len(stack) - 1]
    ans = max(ans, (p.i - p.s + 1) * p.h)
    if len(stack) > 0 {
      stack[len(stack) - 1].i = p.i
    }
  }
  return ans
}