function myPow(x: number, n: number): number {
  if (n === 0) return 1
  if (n > 0) {
    while (n > 0) {
      if (n % 2) {
        return x * myPow(x, n - 1)
      } else {
        return myPow(x * x, n / 2)
      }
    }
  } else {
    while (n < 0) {
      if (n % 2 < 0) {
        return myPow(x, n + 1) / x
      } else {
        return myPow(x * x, n / 2)
      }
    }
  }
}