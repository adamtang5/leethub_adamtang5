function majorityElement(nums: number[]): number {
  const tally = {}
  for (const num of nums) {
    tally[num] = tally[num] || 0
    tally[num]++
    if (tally[num] >= nums.length / 2) return num
  }
}