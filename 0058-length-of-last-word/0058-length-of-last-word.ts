function lengthOfLastWord(s: string): number {
  let i: number = s.length - 1
  while (s[i] === ' ') i--
  let ans: number = 0
  while (i >= 0 && s[i] !== ' ') {
    ans++
    i--
  }
  return ans
}