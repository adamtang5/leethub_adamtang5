func mySqrt(x int) int {
  pivot := 46340
  if x >= pivot * pivot {
    return pivot
  }
  if x < 2 {
    return x
  }
  l, r := 0, x
  for l < r {
    if pivot * pivot <= x && (pivot + 1) * (pivot + 1) > x {
      break
    } else if pivot * pivot > x {
      r = pivot
    } else {
      l = pivot
    }
    pivot = l + (r - l) / 2
  }
  return pivot
}