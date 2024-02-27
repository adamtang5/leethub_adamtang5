function wordPattern(pattern: string, s: string): boolean {
  const words: string[] = s.split(' ')
  if (pattern.length !== words.length) return false
  const fw = {}
  const bw = {}
  for (let i = 0; i < pattern.length; i++) {
    if (words[i] === "constructor") words[i] = "constructor-"
    if (!(pattern[i] in fw) && !(words[i] in bw)) {
      fw[pattern[i]] = words[i]
      bw[words[i]] = pattern[i]
    } else if (pattern[i] in fw && !(words[i] in bw)) {
      return false
    } else if (!(pattern[i] in fw) && words[i] in bw) {
      return false
    } else if (fw[pattern[i]] !== words[i] || bw[words[i]] !== pattern[i]) {
      return false
    }
  }
  return true
}