class Solution:
  def countPrimes(self, n: int) -> int:
    if n < 3: return 0
    comps = [False]*n
    for m in range(2, math.floor(math.sqrt(n))+1):
      if not comps[m]:
        for t in range(m*m, n, m):
          comps[t] = True
    return comps.count(False)-2