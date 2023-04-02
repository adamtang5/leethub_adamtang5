# Definition for a binary tree node.
# class TreeNode:
#   def __init__(self, val=0, left=None, right=None):
#     self.val = val
#     self.left = left
#     self.right = right
class Solution:
  def recoverTree(self, root: Optional[TreeNode]) -> None:
    """
    Do not return anything, modify root in-place instead.
    """
    nodes = []
    
    def dfs(node):
      if not node:
        return
      dfs(node.left)
      nodes.append(node)
      dfs(node.right)
    dfs(root)
    vals = [node.val for node in nodes]
    vals.sort()
    
    for i, node in enumerate(nodes):
      node.val = vals[i]