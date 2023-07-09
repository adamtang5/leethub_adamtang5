function permute(nums: number[]): number[][] {
  if (nums.length === 1) return [nums]
  
  let ans: number[][] = []
  nums.forEach((n, i) => {
    const copy: number[] = nums.slice()
    const extracted: number[] = copy.splice(i, 1)
    permute(copy).forEach(p => {
      ans.push([...extracted, ...p])
    })
  })
  return ans
}