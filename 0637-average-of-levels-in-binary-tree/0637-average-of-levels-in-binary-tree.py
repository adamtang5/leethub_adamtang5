# Definition for a binary tree node.
# class TreeNode:
#   def __init__(self, val=0, left=None, right=None):
#     self.val = val
#     self.left = left
#     self.right = right
class Solution:
  def averageOfLevels(self, root: Optional[TreeNode]) -> List[float]:
    queue = [[0, root]] if root else []
    scores = []
    while len(queue):
      level, node = queue.pop(0)
      if level > len(scores)-1:
        scores.append([])
      scores[level].append(node.val)
      if node.left:
        queue.append([level+1, node.left])
      if node.right:
        queue.append([level+1, node.right])
    return [sum(level)/len(level) for level in scores]