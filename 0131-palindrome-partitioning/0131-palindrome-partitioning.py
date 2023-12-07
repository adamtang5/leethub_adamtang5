class Solution:
  def partition(self, s: str) -> List[List[str]]:
    ans, part = [], []
    
    def isPali(st: str, l: int, r: int) -> bool:
      while l < r:
        if st[l] != st[r]: return False
        l += 1
        r -= 1
      return True
    
    def dfs(i: int) -> None:
      if i >= len(s):
        ans.append(part.copy())
        return
      for j in range(i, len(s)):
        if isPali(s, i, j):
          part.append(s[i:j+1])
          dfs(j+1)
          part.pop()
    
    dfs(0)
    return ans