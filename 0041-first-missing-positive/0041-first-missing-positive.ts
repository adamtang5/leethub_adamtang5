function firstMissingPositive(nums: number[]): number {
  const positives = {}
  nums.forEach(n => {
    if (n > 0) positives[n] = true
  })
  let missing = 1
  while (positives[missing] !== undefined) missing++
  return missing
}