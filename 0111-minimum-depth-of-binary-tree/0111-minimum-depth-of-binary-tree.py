from collections import defaultdict

# Definition for a binary tree node.
# class TreeNode:
#   def __init__(self, val=0, left=None, right=None):
#     self.val = val
#     self.left = left
#     self.right = right
class Solution:
  def minDepth(self, root: Optional[TreeNode]) -> int:
    if not root: return 0
    ans, levels = 1, defaultdict(list)
    levels[ans].append(root)
    while True:
      for node in levels[ans]:
        if not node.left and not node.right: return ans
        if node.left:
          levels[ans+1].append(node.left)
        if node.right:
          levels[ans+1].append(node.right)
      ans += 1