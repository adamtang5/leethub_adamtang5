# Definition for a binary tree node.
# class TreeNode:
#   def __init__(self, val=0, left=None, right=None):
#     self.val = val
#     self.left = left
#     self.right = right
class Solution:
  def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
    ans = []
    stack = [root] if root else []
    popped = None
    while stack:
      popped = stack.pop()
      ans.append(popped.val)
      if popped.right:
        stack.append(popped.right)
      if popped.left:
        stack.append(popped.left)
    return ans