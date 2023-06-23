function combinationSum(candidates: number[], target: number): number[][] {
  candidates = candidates.filter(n => n <= target)
  if (!candidates.length) return []
  
  candidates.sort((a, b) => b - a)
  const ans: number[][] = []
  
  function dfs(c: number[], t: number, suffix: number[] = []): void {
    if (t === 0) {
      ans.unshift(suffix)
    } else if (t > 0) {
      let currMax: number = c[0]
      for (let i = Math.floor(t / currMax); i >= 0; i--) {
        dfs(c.slice(1), t - i * currMax, [...new Array(i).fill(currMax), ...suffix])
      }
    }
  }
  
  dfs(candidates, target)
  return ans
}