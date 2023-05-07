function isMatch(s: string, p: string): boolean {
  const parsed: string[] = []
  let i = 0
  while (i < p.length) {
    if (p[i + 1] === '*') {
      parsed.push(p[i] + p[i + 1])
      i += 2
    } else {
      parsed.push(p[i])
      i++
    }
  }
  
  function charMatch(ch1: string, ch2: string): boolean {
    return ch2 === '.' || ch2 === ch1
  }
  
  function dfs(s: string, patterns: string[], dp: {}): boolean {
    const key: string = JSON.stringify([s, patterns])
    if (s.length && !patterns.length) {
      dp[key] = false
      return dp[key]
    }
    if (!s.length && !patterns.length) {
      dp[key] = true
      return dp[key]
    }
    if (!s.length && patterns.length) {
      dp[key] = patterns.every(el => el.length === 2)
      return dp[key]
    }
    
    const first: string = patterns.shift()
    if (first.length === 1) {
      dp[key] = charMatch(s[0], first) && dfs(s.slice(1), patterns, dp)
      return dp[key]
    } else {
      if (!charMatch(s[0], first[0])) {
        dp[key] = dfs(s, patterns, dp)
        return dp[key]
      } else {
        if (dp[key] !== undefined) {
          return dp[key]
        } else {
          let len = 1
          while (first[0] === '.' && len < s.length || s[len] === s[0]) {
            len++
          }

          let ans = false
          for (let i = 0; i <= len; i++) {
            const copy: string[] = patterns.slice()
            ans ||= dfs(s.slice(i), copy, dp)
          }
          dp[key] = ans
          return ans
        }
      }
    }
  }
  
  return dfs(s, parsed, {})
}