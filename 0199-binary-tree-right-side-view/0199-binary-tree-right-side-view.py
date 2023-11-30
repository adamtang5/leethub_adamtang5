# Definition for a binary tree node.
# class TreeNode:
#   def __init__(self, val=0, left=None, right=None):
#     self.val = val
#     self.left = left
#     self.right = right
class Solution:
  def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
    levels = [[root]] if root else [[]]
    while levels[-1]:
      levels.append([])
      next = levels[-1]
      for node in levels[-2]:
        if node.left:
          next.append(node.left)
        if node.right:
          next.append(node.right)
    if not levels[-1]:
      levels.pop()
    return [level[-1].val for level in levels]