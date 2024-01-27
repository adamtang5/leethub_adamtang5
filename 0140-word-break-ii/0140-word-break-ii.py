from collections import defaultdict

class Solution:
  def wordBreak(self, s: str, wordDict: List[str]) -> List[str]:
    maxWordLen, minWordLen = 0, 20
    lenSets = defaultdict(set)
    for word in wordDict:
      maxWordLen = max(maxWordLen, len(word))
      minWordLen = min(minWordLen, len(word))
      lenSets[len(word)].add(word)
    
    parents = defaultdict(set)
    start, sCopy = 0, s
    while start < len(s):
      for l in range(minWordLen, min(maxWordLen, len(sCopy))+1):
        if l in lenSets:
          for word in lenSets[l]:
            if sCopy.startswith(word):
              parents[start+len(word)].add(start)
      sCopy = sCopy[1:]
      start += 1
    
    ans = []
    def build(curr: int, currWords: List[str]) -> None:
      if curr == 0:
        ans.append(' '.join(currWords))
        return
      if curr not in parents: return
      for parent in parents[curr]:
        build(parent, [s[parent:curr]]+currWords)
    
    build(len(s), [])
    return ans