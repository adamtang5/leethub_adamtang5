function firstMissingPositive(nums: number[]): number {
  const positives: Set<number> = new Set()
  nums.forEach(n => {
    if (n > 0) positives.add(n)
  })
  let missing = 1
  while (positives.has(missing)) missing++
  return missing
}