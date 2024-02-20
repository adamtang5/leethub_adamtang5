# Definition for a binary tree node.
# class TreeNode:
#   def __init__(self, val=0, left=None, right=None):
#     self.val = val
#     self.left = left
#     self.right = right
class Solution:
  def countNodes(self, root: Optional[TreeNode]) -> int:
    if not root: return 0
    left = right = root
    lHt = rHt = 1
    while left.left:
      left = left.left
      lHt += 1
    while right.right:
      right = right.right
      rHt += 1
    if lHt == rHt: return 2**lHt-1
    return 1+self.countNodes(root.left)+self.countNodes(root.right)