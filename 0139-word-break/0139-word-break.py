from collections import defaultdict

class Solution:
  def wordBreak(self, s: str, wordDict: List[str]) -> bool:
    maxWordLen, minWordLen = 0, 20
    lenSets = defaultdict(set)
    for word in wordDict:
      maxWordLen = max(maxWordLen, len(word))
      minWordLen = min(minWordLen, len(word))
      lenSets[len(word)].add(word)
    fails = set()
    
    def dfs(s: str) -> bool:
      if len(s) == 0: return True
      if s in fails: return False
      if len(s) < minWordLen:
        fails.add(s)
        return False
      ans = False
      for l in range(minWordLen, min(maxWordLen, len(s))+1):
        if l in lenSets:
          for word in lenSets[l]:
            if s.startswith(word):
              ans = ans or dfs(s[len(word):])
      if not ans:
        fails.add(s)
      return ans
    
    return dfs(s)