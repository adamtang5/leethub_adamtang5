from collections import defaultdict

# Definition for a binary tree node.
# class TreeNode:
#   def __init__(self, val=0, left=None, right=None):
#     self.val = val
#     self.left = left
#     self.right = right
class Solution:
  def maxDepth(self, root: Optional[TreeNode]) -> int:
    if not root:
      return 0
    depth = 0
    levels = defaultdict(list)
    levels[depth] = [root]
    while len(levels[depth]):
      for node in levels[depth]:
        if node.left:
          levels[depth+1].append(node.left)
        if node.right:
          levels[depth+1].append(node.right)
      depth += 1
    return depth