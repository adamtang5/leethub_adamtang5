function numDistinct(s: string, t: string): number {
  const tChars: Set<string> = new Set()
  for (let i = 0; i < t.length; i++) tChars.add(t[i])
  let newS = ""
  for (let i = 0; i < s.length; i++) {
    if (tChars.has(s[i])) newS += s[i]
  }
  let [l, r] = [0, s.length]
  while (newS[l] !== t[0] && l < newS.length) l++
  while (newS[r - 1] !== t.at(-1) && r > 0) r--
  s = newS.slice(l, r)
  if (!s.length) return 0
  
  const dp: number[][] = new Array(s.length).fill([]).map(_ => new Array(t.length).fill(0))
  for (let l = 0; l < s.length; l++) {
    if (s[l] === t[0]) dp[l][0]++
  }
  for (let r = 0; r < t.length - 1; r++) {
    for (let l = r; l < s.length; l++) {
      if (dp[l][r]) {
        for (let i = l + 1; i < s.length; i++) {
          if (s[i] === t[r + 1]) dp[i][r + 1] += dp[l][r]
        }
      }
    }
  }
  return dp.reduce((sum, row) => sum + row.at(-1), 0)
}