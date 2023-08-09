function climbStairs(n: number): number {
  if (n <= 2) return n
  const mem: number[] = [1, 2]
  while (n > 2) {
    mem.push(mem[1] + mem.shift())
    n--
  }
  return mem[1]
}