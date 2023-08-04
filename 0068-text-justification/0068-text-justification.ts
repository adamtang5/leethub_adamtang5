function fullJustify(words: string[], maxWidth: number): string[] {
  function leftJustify(words: string[], maxWidth: number): string {
    let ans = words.join(" ")
    const tail: string = " ".repeat(maxWidth - ans.length)
    return ans + tail
  }
  
  function justifyLine(words: string[], maxWidth: number): string {
    if (words.length === 1) return leftJustify(words, maxWidth)
    const wordsLen: number = words.reduce((sum, word) => sum + word.length, 0)
    let spaces: number = maxWidth - wordsLen
    const wordsCount: number = words.length
    let ans: string = ""
    let base: number
    let leftover: number
    for (let i = 0; i < wordsCount - 1; i++) {
      ans += words[i]
      base = Math.floor(spaces / (wordsCount - 1))
      leftover = i < spaces % (wordsCount - 1) ? 1 : 0
      ans += " ".repeat(base + leftover)
    }
    ans += words.at(-1)
    return ans
  }
  
  const lines = []
  let [l, r, minWidth] = [0, 0, words[0].length]
  while (l < words.length) {
    if (minWidth === maxWidth) {
      lines.push(words.slice(l, r + 1).join(" "))
      l = r + 1
      r = l
      minWidth = l < words.length ? words[l].length : 0
    } else if (minWidth > maxWidth) {
      minWidth -= words[r].length
      minWidth--
      r--
      lines.push(justifyLine(words.slice(l, r + 1), maxWidth))
      l = r + 1
      r = l
      minWidth = l < words.length ? words[l].length : 0
    } else if (minWidth < maxWidth) {
      r++
      if (r < words.length) {
        minWidth += words[r].length
        minWidth++
      } else {
        lines.push(leftJustify(words.slice(l), maxWidth))
        break
      }
    }
  }
  return lines
}