function isUgly(n: number): boolean {
  if (n <= 0) return false
  if (n < 7) return true
  for (const f of [2, 3, 5]) {
    while (n % f === 0) n /= f
  }
  return n === 1
}