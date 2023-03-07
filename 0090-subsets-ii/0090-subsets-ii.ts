function subsetsWithDup(nums: number[]): number[][] {
  nums.sort()
  
  const tallies: number[][] = [[nums[0], 1]]
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === tallies[tallies.length - 1][0]) {
      tallies[tallies.length - 1][1]++
    } else {
      tallies.push([nums[i], 1])
    }
  }
  
  const keys: number[] = tallies.map(pair => pair[0])
  const counts: number[] = tallies.map(pair => pair[1])
  
  const ans: number[][] = []
  
  for (let target = 0; target <= nums.length; target++) {
    dfs(target, counts.slice(), nums.length, ans, keys)
  }
  
  return ans
};

function dfs(target: number, tallies: number[], total: number, ans: number[][], keys: number[], idx: number = 0, res: number[] = []): void {
  if (target > total) return null
  if (!target) {
    ans.push(res)
    return
  }
  const curr = tallies.shift()
  for (let part = Math.min(curr, target); part >= 0; part--) {
    dfs(target - part, tallies.slice(), total - curr, ans, keys, idx + 1, [...res, ...(new Array(part).fill(keys[idx]))])
  }
}