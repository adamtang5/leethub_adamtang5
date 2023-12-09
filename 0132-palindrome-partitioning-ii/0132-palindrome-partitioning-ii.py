class Solution:
  def minCut(self, s: str) -> int:
    adj = collections.defaultdict(set)
    for i in range(len(s)):
      for j in range(i, i+2):
        l, r = i, j
        while l in range(len(s)) and r in range(len(s)) and s[l] == s[r]:
          adj[l].add(r+1)
          l, r = l-1, r+1

    pathQ = [[0]]
    visited = set([0])
    while pathQ:
      currPath = pathQ.pop(0)
      currNode = currPath[-1]
      if currNode == len(s):
        return len(currPath)-2
      for nb in adj[currNode]:
        if nb not in visited:
          visited.add(nb)
          pathQ.append(currPath+[nb])