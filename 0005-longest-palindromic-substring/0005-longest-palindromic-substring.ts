function longestPalindrome(s: string): string {
  if (s.length < 2) return s
  
  s = `$${s}@`
  s = s.split('').join('#')
  const pExt: number[] = new Array(s.length).fill(0)
  
  let ctr = 0
  let r = 0
  let mir = 0
  for (let i = 0; i < s.length - 1; i++) {
    mir = 2 * ctr - i
    if (i < r) pExt[i] = Math.min(r - i, pExt[mir])
    while (s[i - 1 - pExt[i]] === s[i + 1 + pExt[i]]) pExt[i]++;
    if (pExt[i] + 1 > r) {
      ctr = i
      r = pExt[i] + 1
    }
  }
  const maxExt: number = Math.max(...pExt)
  ctr = pExt.indexOf(maxExt)
  return s.slice(ctr - maxExt, ctr + maxExt + 1).replaceAll('#', '')
};