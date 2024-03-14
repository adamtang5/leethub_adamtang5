function isPowerOfTwo(n: number): boolean {
  if (n <= 0) return false
  return (n & (-n >>> 0)) === n
};