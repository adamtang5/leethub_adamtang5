"""
# Definition for a Node.
class Node:
  def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
    self.val = val
    self.left = left
    self.right = right
    self.next = next
"""

class Solution:
  def connect(self, root: 'Optional[Node]') -> 'Optional[Node]':
    queue = [[0, root]] if root else []
    levels = []
    while queue:
      level, node = queue.pop(0)
      if level > len(levels)-1:
        levels.append([])
      levels[level].append(node)
      if node.left:
        queue.append([level+1, node.left])
      if node.right:
        queue.append([level+1, node.right])
    curr = None
    while levels:
      level = levels.pop(0)
      curr = None
      last = None
      while level:
        last = level.pop()
        last.next = curr
        curr = last
    return root