class Solution:
  def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
    candidates = [c for c in candidates if c <= target]
    if candidates == []: return []
    candidates.sort(reverse=True)
    ans = []

    def dfs(c, t, suffix=[]):
      if t == 0:
        ans.insert(0, suffix)
        return
      elif c == []:
        return
      elif t > 0:
        currMax = c[0]
        n = 1
        while n < len(c) and c[n] == c[n-1]:
          n += 1
        for i in range(min(t//currMax, n), -1, -1):
          dfs(c[n:], t-i*currMax, [currMax]*i+suffix)

    dfs(candidates, target)
    return ans