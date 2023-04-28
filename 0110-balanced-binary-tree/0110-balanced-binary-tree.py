# Definition for a binary tree node.
# class TreeNode:
#   def __init__(self, val=0, left=None, right=None):
#     self.val = val
#     self.left = left
#     self.right = right
class Solution:
  def isBalanced(self, root: Optional[TreeNode]) -> bool:
    def dfs(node):
      if not node:
        return True, 0
      lBal, lHt = dfs(node.left)
      rBal, rHt = dfs(node.right)
      return lBal and rBal and abs(lHt - rHt) <= 1, max(lHt, rHt)+1
    
    return dfs(root)[0]