function majorityElement(nums: number[]): number {
  const tally = {}
  nums.forEach(num => {
    tally[num] = tally[num] || 0
    tally[num]++
  })
  for (const key in tally) {
    if (tally[key] >= nums.length / 2) return parseInt(key)
  }
}