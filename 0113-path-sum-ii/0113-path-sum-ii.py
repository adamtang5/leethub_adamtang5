# Definition for a binary tree node.
# class TreeNode:
#   def __init__(self, val=0, left=None, right=None):
#     self.val = val
#     self.left = left
#     self.right = right
class Solution:
  def pathSum(self, root: Optional[TreeNode], targetSum: int) -> List[List[int]]:
    ans = []
    def dfs(node: Optional[TreeNode], runningSum: int, runningVals: List[int]) -> None:
      if node is None: return
      next = runningVals+[node.val]
      if node.left is None and node.right is None and runningSum+node.val == targetSum:
        ans.append(next)
      dfs(node.left, runningSum+node.val, next)
      dfs(node.right, runningSum+node.val, next)
    dfs(root, 0, [])
    return ans