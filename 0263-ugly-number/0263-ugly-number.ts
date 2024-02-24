function isUgly(n: number): boolean {
  if (n <= 0) return false
  if (n < 7) return true
  const factors: number[] = [2, 3, 5]
  for (const f of factors) {
    while (n % f === 0) n /= f
  }
  return n === 1
}