function singleNumber(nums: number[]): number {
  const tally: Set<number> = new Set()
  nums.forEach(num => {
    if (tally.has(num)) {
      tally.delete(num)
    } else {
      tally.add(num)
    }
  })
  return [...tally][0]
}