function isMatch(s: string, p: string): boolean {
  let t: string = ''
  for (let i = 0; i < p.length; i++) {
    if (p[i] === '*') {
      while (i < p.length - 1 && p[i + 1] === '*') i++
    }
    t += p[i]
  }
  p = t
  
  function charMatch(ch1: string, ch2: string): boolean {
    return ch2 === '?' || ch2 === ch1
  }
  
  function dfs(sIdx: number, pIdx: number, dp: {}): boolean {
    const key: string = `${sIdx}-${pIdx}`
    
    if (sIdx < s.length && pIdx === p.length) {
      dp[key] = false
      return dp[key]
    }
    if (sIdx === s.length && pIdx === p.length) {
      dp[key] = true
      return dp[key]
    }
    if (sIdx === s.length && pIdx < p.length) {
      dp[key] = true
      for (let i = pIdx; i < p.length; i++) {
        if (p[i] !== '*') {
          dp[key] = false
          break
        }
      }
      return dp[key]
    }
    
    if (p[pIdx] !== '*') {
      if (!charMatch(s[sIdx], p[pIdx])) {
        dp[key] = false
        return dp[key]
      } else {
        dp[key] = dfs(sIdx + 1, pIdx + 1, dp)
        return dp[key]
      }
    } else {
      if (dp[key] !== undefined) {
        return dp[key]
      } else {
        let ans = false
        for (let i = sIdx; i <= s.length; i++) {
          ans ||= dfs(i, pIdx + 1, dp)
        }
        dp[key] = ans
        return dp[key]
      }
    }
  }
  
  return dfs(0, 0, {})
}