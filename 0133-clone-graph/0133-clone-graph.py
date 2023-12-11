"""
# Definition for a Node.
class Node:
  def __init__(self, val = 0, neighbors = None):
    self.val = val
    self.neighbors = neighbors if neighbors is not None else []
"""

from typing import Optional
class Solution:
  def cloneGraph(self, node: Optional['Node']) -> Optional['Node']:
    newGraph, visited = collections.defaultdict(Node), set()
    if not node: return None
    
    def dfs(node: Optional['Node']) -> None:
      visited.add(node.val)
      newGraph[node.val].val = node.val
      for nb in node.neighbors:
        newGraph[nb.val].val = nb.val
        if newGraph[nb.val] not in newGraph[node.val].neighbors:
          newGraph[node.val].neighbors.append(newGraph[nb.val])
        if nb.val not in visited:
          dfs(nb)
    
    dfs(node)
    return newGraph[1]