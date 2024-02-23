function addDigits(num: number): number {
  if (num === 0) return num
  num %= 9
  if (num === 0) return 9
  return num
}