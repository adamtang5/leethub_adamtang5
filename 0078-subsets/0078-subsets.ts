function subsets(nums: number[]): number[][] {
  const ans: number[][] = []
  for (let i = 0; i < 2 ** nums.length; i++) {
    const sub: number[] = []
    for (let j = 0; j < nums.length; j++) {
      if (i & 1 << j) sub.push(nums[j])
    }
    ans.push(sub)
  }
  return ans
}