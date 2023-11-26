# Definition for a binary tree node.
# class TreeNode:
#   def __init__(self, val=0, left=None, right=None):
#     self.val = val
#     self.left = left
#     self.right = right
class Solution:
  def sumNumbers(self, root: Optional[TreeNode]) -> int:
    ans = 0
    
    def dfs(node: Optional[TreeNode], curr: int) -> None:
      nonlocal ans
      if not node.left and not node.right:
        ans += curr+node.val
      if node.left:
        dfs(node.left, 10*(curr+node.val))
      if node.right:
        dfs(node.right, 10*(curr+node.val))
    
    dfs(root, 0)
    return ans