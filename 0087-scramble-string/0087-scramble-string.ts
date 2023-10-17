function isScramble(s1: string, s2: string): boolean {
  const starter: number[] = new Array(26).fill(0)
  const aCode: number = "a".charCodeAt(0)
  const dp = {}
  
  function dfs(s1: string, s2: string): boolean {
    const key: string = `${s1}-${s2}`
    if (key in dp) return dp[key]
    if (s1.length === 1) {
      let ans: boolean = s1 === s2
      dp[key] = ans
      return ans
    }
    const tally1: number[] = starter.slice()
    const tally2: number[] = starter.slice()
    for (let i = 0; i < s1.length; i++) {
      tally1[s1.charCodeAt(i) - aCode]++
      tally2[s2.charCodeAt(i) - aCode]++
    }
    if (JSON.stringify(tally1) !== JSON.stringify(tally2)) {
      dp[key] = false
      return false
    }
    
    let ans = false
    for (let split = 1; split < s1.length; split++) {
      ans ||= dfs(s1.slice(0, split), s2.slice(0, split)) &&
        dfs(s1.slice(split), s2.slice(split))
      ans ||= dfs(s1.slice(0, split), s2.slice(s2.length - split)) &&
        dfs(s1.slice(split), s2.slice(0, s2.length - split))
    }
    dp[key] = ans
    return ans
  }
  
  return dfs(s1, s2)
}