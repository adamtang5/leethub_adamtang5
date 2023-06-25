function combinationSum2(candidates: number[], target: number): number[][] {
  candidates = candidates.filter(c => c <= target)
  if (!candidates.length) return []
  candidates.sort((a, b) => b - a)
  const ans: number[][] = []
  
  function dfs(c: number[], t: number, suffix: number[] = []): void {
    if (t === 0) {
      ans.unshift(suffix)
    } else if (!c.length) {
      return
    } else if (t > 0) {
      const currMax: number = c[0]
      let n = 1
      while (c[n] === c[n - 1]) {
        n++
      }
      for (let i = Math.min(Math.floor(t / currMax), n); i >= 0; i--) {
        dfs(c.slice(n), t - i * currMax, [...new Array(i).fill(currMax), ...suffix])
      }
    }
  }
  
  dfs(candidates, target)
  return ans
}