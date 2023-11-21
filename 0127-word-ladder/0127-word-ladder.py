class Solution:
  def ladderLength(self, beginWord: str, endWord: str, wordList: List[str]) -> int:
    if endWord not in wordList: return 0
    
    patterns = collections.defaultdict(list)
    def getPatterns(word: str) -> None:
      for i in range(len(word)):
        key = word[:i]+"*"+word[i+1:]
        patterns[key].append(word)
    for word in [beginWord]+wordList:
      getPatterns(word)
    
    pathQ, visited, currPath, currNode = [[beginWord]], set([beginWord]), None, None
    while pathQ:
      currPath = pathQ.pop(0)
      currNode = currPath[-1]
      if currNode == endWord: return len(currPath)
      for i in range(len(currNode)):
        key = currNode[:i]+"*"+currNode[i+1:]
        for nb in patterns[key]:
          if nb != currNode and nb not in visited:
            visited.add(nb)
            pathQ.append(currPath+[nb])
    return 0