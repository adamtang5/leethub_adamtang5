class Solution:
  def findLadders(self, beginWord: str, endWord: str, wordList: List[str]) -> List[List[str]]:
    layers, visited, wordSet, parents = [{beginWord}], set([beginWord]), set(wordList), collections.defaultdict(set)
    
    while endWord not in visited and layers[-1]:
      currLayer = layers[-1]
      layers.append(set())
      for currWord in currLayer:
        for j in range(len(currWord)):
          for c in string.ascii_lowercase:
            nextWord = currWord[:j]+c+currWord[j+1:]
            if nextWord != currWord and nextWord in wordSet and nextWord not in visited:
              nextLayer = layers[-1]
              nextLayer.add(nextWord)
              parents[nextWord].add(currWord)
      visited.update(layers[-1])
    if endWord not in visited: return []
      
    def backtrack(paths: List[List[str]]) -> None:
      if paths[0][0] == beginWord:
        return [path for path in paths if path[0] == beginWord]
      ans = []
      for path in paths:
        for parent in parents[path[0]]:
          ans.append([parent]+path)
      return backtrack(ans)

    return backtrack([[endWord]])