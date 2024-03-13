class Solution:
  def longestPalindrome(self, s: str) -> str:
    if len(s) < 2: return s
    s = '#'.join(list(f'${s}@'))
    pExt = [0]*len(s)
    ctr = r = mir = 0
    for i in range(len(s)-1):
      mir = 2*ctr-i
      if i < r:
        pExt[i] = min(r-i, pExt[mir])
      while s[i-1-pExt[i]] == s[i+1+pExt[i]]:
        pExt[i] += 1
      if pExt[i]+1 > r:
        ctr = i
        r = pExt[i]+1
    maxExt = max(pExt)
    ctr = pExt.index(maxExt)
    return s[ctr-maxExt:ctr+maxExt+1].replace('#', '')