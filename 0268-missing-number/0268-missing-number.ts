function missingNumber(nums: number[]): number {
  const numSet: Set<number> = new Set(nums)
  for (let n = 0; n <= nums.length; n++) {
    if (!numSet.has(n)) return n
  }
}