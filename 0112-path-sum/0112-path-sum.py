# Definition for a binary tree node.
# class TreeNode:
#   def __init__(self, val=0, left=None, right=None):
#     self.val = val
#     self.left = left
#     self.right = right
class Solution:
  def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
    queue = [[root.val, root]] if root else []
    while len(queue):
      sum, node = queue.pop(0)
      if node.left is None and node.right is None and sum == targetSum: return True
      if node.left:
        queue.append([sum+node.left.val, node.left])
      if node.right:
        queue.append([sum+node.right.val, node.right])
    return False