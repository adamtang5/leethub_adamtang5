function summaryRanges(nums: number[]): string[] {
  let l = 0
  let r = 0
  const ans: string[] = []
  while (l < nums.length) {
    while (r < nums.length - 1 && nums[r + 1] === nums[r] + 1) r++
    if (l < nums.length) {
      ans.push(l === r ? nums[l].toString() : `${nums[l]}->${nums[r]}`)
      l = r + 1
      r = l
    }
  }
  return ans
}