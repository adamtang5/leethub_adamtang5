function isMatch(s: string, p: string): boolean {
  function charMatch(ch1: string | undefined, ch2: string | undefined): boolean {
    if (!ch1 || !ch2) return false
    return ch2 === '?' || ch2 === ch1
  }
  
  function parse(s: string, chunks: string[]): boolean {
    if (!chunks.length) return true
    let [start, cIdx, j] = [0, 0, 1]
    while (cIdx < chunks.length && start < s.length) {
      while (start < s.length && !charMatch(s[start], chunks[cIdx][0])) start++
      if (start === s.length) break
      j = 1
      while (j < chunks[cIdx].length && start + j < s.length && charMatch(s[start + j], chunks[cIdx][j])) j++
      if (j === chunks[cIdx].length) {
        cIdx++
        start += j
      } else {
        start++
      }
    }
    return cIdx === chunks.length
  }
  
  let t: string = ''
  for (let i = 0; i < p.length; i++) {
    if (p[i] === '*') {
      while (i < p.length - 1 && p[i + 1] === '*') i++
    }
    t += p[i]
  }
  p = t
  let i = 0
  if (p[i] !== '*') {
    while (p[i] !== '*' && i < p.length) {
      if (!charMatch(s[i], p[i])) return false
      i++
    }
    s = s.slice(i)
    p = p.slice(i)
  }
  if (p === '') return s === ''
  i = 0
  if (p[p.length - 1 - i] !== '*') {
    while (p[p.length - 1 - i] !== '*') {
      if (!charMatch(s[s.length - 1 - i], p[p.length - 1 - i])) return false
      i++
    }
    s = s.slice(0, s.length - i)
    p = p.slice(0, p.length - i)
  }
  if (p === '*') return true
  
  return parse(s, p.slice(1, p.length - 1).split('*'))
}