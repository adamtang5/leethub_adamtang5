# Definition for a binary tree node.
# class TreeNode:
#   def __init__(self, val=0, left=None, right=None):
#     self.val = val
#     self.left = left
#     self.right = right
class Solution:
  def levelOrderBottom(self, root: Optional[TreeNode]) -> List[List[int]]:
    queue = [[0, root]] if root else []
    fw = []
    while len(queue):
      level, node = queue.pop(0)
      if level > len(fw)-1:
        fw.append([])
      fw[level].append(node.val)
      if node.left:
        queue.append([level+1, node.left])
      if node.right:
        queue.append([level+1, node.right])
    return fw[::-1]