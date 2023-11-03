function majorityElement(nums: number[]): number {
  const tally = {}
  const threshold = nums.length / 2
  for (const num of nums) {
    tally[num] = tally[num] || 0
    tally[num]++
    if (tally[num] >= threshold) return num
  }
}