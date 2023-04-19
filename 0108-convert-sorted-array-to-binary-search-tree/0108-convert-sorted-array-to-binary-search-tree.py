# Definition for a binary tree node.
# class TreeNode:
#   def __init__(self, val=0, left=None, right=None):
#     self.val = val
#     self.left = left
#     self.right = right
class Solution:
  def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:
    def helper(lb, ub):
      if lb == ub:
        return None
      mid = (lb+ub)//2
      return TreeNode(nums[mid], helper(lb, mid), helper(mid+1, ub))
    return helper(0, len(nums))