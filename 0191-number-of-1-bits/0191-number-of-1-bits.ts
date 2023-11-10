function hammingWeight(n: number): number {
  return n.toString(2).split('').filter(d => d === '1').length
}