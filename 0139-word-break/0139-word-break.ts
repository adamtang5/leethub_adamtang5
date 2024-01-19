function wordBreak(s: string, wordDict: string[]): boolean {
  let maxWordLen = 0
  let minWordLen = 20
  const lenSets = {}
  wordDict.forEach(word => {
    maxWordLen = Math.max(maxWordLen, word.length)
    minWordLen = Math.min(minWordLen, word.length)
    lenSets[word.length] ||= new Set()
    lenSets[word.length].add(word)
  })
  const fails = new Set()
  
  function dfs(s: string): boolean {
    if (s.length === 0) return true
    if (fails.has(s)) return false
    if (s.length < minWordLen) {
      fails.add(s)
      return false
    }
    let ans = false
    for (let len = minWordLen; len <= maxWordLen && len <= s.length; len++) {
      if (len in lenSets) {
        lenSets[len].forEach(word => {
          if (s.startsWith(word)) ans ||= dfs(s.slice(word.length))
        })
      }
    }
    if (!ans) fails.add(s)
    return ans
  }
  
  return dfs(s)
}