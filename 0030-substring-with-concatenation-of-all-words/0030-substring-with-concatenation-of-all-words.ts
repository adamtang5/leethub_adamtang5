function findSubstring(s: string, words: string[]): number[] {
  const ans: number[] = []
  const counts = {}
  words.forEach(word => {
    counts[word] = counts[word] || 0
    counts[word]++
  })
  
  let [start, currWord, j] = [0, '', 0]
  for (let offset = 0; offset < words[0].length; offset++) {
    start = offset
    const countsCopy = {...counts}
    const currWords: string[] = []
    for (let i = offset; i + words[0].length <= s.length; i += words[0].length) {
      currWord = ''
      j = 0
      while (j < words[0].length) {
        currWord += s[i + j]
        j++
      }
      start = Math.max(i + j - words.length * words[0].length, start)
      currWords.push(currWord)
      const popped: string = currWords[currWords.length - words.length - 1]
      if (countsCopy[popped] !== undefined) countsCopy[popped]++
      if (countsCopy[currWord] !== undefined) {
        countsCopy[currWord]--
        if (Object.values(countsCopy).every(val => val === 0)) ans.push(start)
      }
    }
  }
  return ans
}