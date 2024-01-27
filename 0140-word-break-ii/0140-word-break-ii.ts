function wordBreak(s: string, wordDict: string[]): string[] {
  let maxWordLen = 0
  let minWordLen = 20
  const lenSets = {}
  wordDict.forEach(word => {
    maxWordLen = Math.max(maxWordLen, word.length)
    minWordLen = Math.min(minWordLen, word.length)
    lenSets[word.length] ||= new Set()
    lenSets[word.length].add(word)
  })
  const parents = {}
  let start = 0
  let sCopy: string = s
  while (start < s.length) {
    for (let len = minWordLen; len <= maxWordLen && len <= sCopy.length; len++) {
      if (len in lenSets) {
        lenSets[len].forEach(word => {
          if (sCopy.startsWith(word)) {
            parents[start + word.length] ||= new Set()
            parents[start + word.length].add(start)
          }
        })
      }
    }
    sCopy = sCopy.slice(1)
    start++
  }
  
  const ans: string[] = []
  function build(curr: number, currWords: string[]): void {
    if (curr === 0) {
      ans.push(currWords.join(' '))
      return
    }
    if (!(curr in parents)) return
    parents[curr].forEach(parent => {
      build(parent, [s.slice(parent, curr), ...currWords])
    })
  }

  build(s.length, [])
  return ans
}