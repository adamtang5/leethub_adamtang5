type Range = {
  lb: number
  ub: number
}

function longestConsecutive(nums: number[]): number {
  const edge: Set<number> = new Set()
  const occurred = {}
  let ans = 0
  nums.forEach(num => {
    if (!edge.has(num) && !occurred[num]) {
      if (!occurred[num + 1] && !occurred[num - 1]) {
        occurred[num] = {
          lb: num,
          ub: num,
        }
        ans = Math.max(ans, 1)
        edge.add(num + 1)
        edge.add(num - 1)
      }
    } else if (edge.has(num)) {
      if (!occurred[num + 1]) edge.add(num + 1)
      if (!occurred[num - 1]) edge.add(num - 1)
      let lMin = num
      let rMax = num
      if (occurred[num + 1]) rMax = occurred[num + 1].ub
      if (occurred[num - 1]) lMin = occurred[num - 1].lb
      const newState = {
        lb: lMin,
        ub: rMax,
      }
      occurred[num] = newState
      occurred[lMin] = newState
      occurred[rMax] = newState
      edge.delete(num)
      ans = Math.max(ans, rMax - lMin + 1)
    }
  })
  return ans
}