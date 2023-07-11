function myPow(x: number, n: number): number {
  if (n === 0) {
    return 1
  } else if (n > 0) {
    return n % 2 ? x * myPow(x, n - 1) : myPow(x * x, n / 2)
  } else if (n < 0) {
    return n % 2 < 0 ? myPow(x, n + 1) / x : myPow(x * x, n / 2)
  }
}