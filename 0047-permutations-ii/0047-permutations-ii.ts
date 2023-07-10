function permuteUnique(nums: number[]): number[][] {
  if (nums.length === 1) return [nums]
  
  const uniqPerms: Set<string> = new Set()
  const dupe: number[][] = []
  const ans: number[][] = []
  for (let i = 0; i < nums.length; i++) {
    const copy: number[] = nums.slice()
    const ext: number[] = copy.splice(i, 1)
    permuteUnique(copy).forEach(p => {
      const cand: number[] = [...ext, ...p]
      dupe.push(cand)
    })
  }
  dupe.forEach(cand => {
    if (!uniqPerms.has(JSON.stringify(cand))) {
      ans.push(cand)
      uniqPerms.add(JSON.stringify(cand))
    }
  })
  return ans
}