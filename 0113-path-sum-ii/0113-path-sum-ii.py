# Definition for a binary tree node.
# class TreeNode:
#   def __init__(self, val=0, left=None, right=None):
#     self.val = val
#     self.left = left
#     self.right = right
class Solution:
  def pathSum(self, root: Optional[TreeNode], targetSum: int) -> List[List[int]]:
    ans, runningSum = [], 0
    stack1 = [root] if root else []
    stack2 = []
    curr = None
    while stack1:
      curr = stack1.pop()
      stack2.append(curr)
      runningSum += curr.val
      if curr.right:
        stack1.append(curr.right)
      if curr.left:
        stack1.append(curr.left)
      if not stack2[-1].left and not stack2[-1].right:
        if runningSum == targetSum:
          ans.append([node.val for node in stack2])
        while stack1 and stack2 and stack1[-1] != stack2[-1].right:
          curr = stack2.pop()
          runningSum -= curr.val
    return ans