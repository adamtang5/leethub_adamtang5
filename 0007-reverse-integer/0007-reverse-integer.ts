function reverse(x: number): number {
  const sign: number = x >= 0 ? 1 : -1
  const ans: number = sign * parseInt(Math.abs(x).toString(10).split('').reverse().join(''), 10)
  return ans < -1 * (2 ** 31) || ans >= 2 ** 31 ? 0 : ans
}