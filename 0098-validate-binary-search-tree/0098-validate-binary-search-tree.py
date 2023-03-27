# Definition for a binary tree node.
# class TreeNode:
#   def __init__(self, val=0, left=None, right=None):
#     self.val = val
#     self.left = left
#     self.right = right
class Solution:
  def isValidBST(self, root: Optional[TreeNode]) -> bool:
    def validNode(lb, val, ub):
      return val > lb and val < ub
    
    queue = [[float('-inf'), root, float('inf')]]
    while queue:
      lb, curr, ub = queue.pop(0)
      if not validNode(lb, curr.val, ub):
        return False
      if curr.left:
        queue.append([lb, curr.left, curr.val])
      if curr.right:
        queue.append([curr.val, curr.right, ub])
    return True