func myPow(x float64, n int) float64 {
  if n > 0 {
    if n%2 == 0 {
      return myPow(x*x, n/2)
    } else {
      return x*myPow(x, n-1)
    }
  } else if n < 0 {
    if n%2 == 0 {
      return myPow(x*x, n/2)
    } else {
      return myPow(x, n+1)/x
    }
  } else {
    return float64(1)
  }
}