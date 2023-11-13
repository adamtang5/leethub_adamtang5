# Definition for a binary tree node.
# class TreeNode:
#   def __init__(self, val=0, left=None, right=None):
#     self.val = val
#     self.left = left
#     self.right = right
class Solution:
  def maxPathSum(self, root: Optional[TreeNode]) -> int:
    ans = [root.val]
    
    def dfs(node: Optional[TreeNode]) -> int:
      if not node: return 0
      leftMax = max(dfs(node.left), 0)
      rightMax = max(dfs(node.right), 0)
      ans[0] = max(ans[0], node.val+leftMax+rightMax)
      return node.val+max(leftMax, rightMax)
    
    dfs(root)
    return ans[0]