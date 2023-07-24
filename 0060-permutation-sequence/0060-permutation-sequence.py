class Solution:
  def getPermutation(self, n: int, k: int) -> str:
    def fact(n: int) -> int:
      if n == 0: return 1
      return n*fact(n-1)
    
    def dfs(q: int, s: List[str], ans='') -> str:
      if len(s) == 0: return ans
      
      subSize = fact(len(s)-1)
      subIdx = q//subSize
      ext = s[subIdx]
      return dfs(q%subSize, s[:subIdx]+s[subIdx+1:], ans+ext)
    
    seq = [str(n+1) for n in range(n)]
    return dfs(k-1, seq)