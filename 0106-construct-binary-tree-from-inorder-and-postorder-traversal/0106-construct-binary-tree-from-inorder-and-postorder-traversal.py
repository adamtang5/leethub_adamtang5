# Definition for a binary tree node.
# class TreeNode:
#   def __init__(self, val=0, left=None, right=None):
#     self.val = val
#     self.left = left
#     self.right = right
class Solution:
  def buildTree(self, inorder: List[int], postorder: List[int]) -> Optional[TreeNode]:
    inIdx = {}
    for i, e in enumerate(inorder):
      inIdx[e] = i
    
    def helper(postLb, postUb):
      if postLb == postUb:
        return None
      rootInIdx = inIdx[postorder[postUb-1]]
      if postUb-postLb == 1:
        return TreeNode(inorder[rootInIdx])
      l, r = postLb, postUb-2
      if inIdx[postorder[r]] < rootInIdx:
        return TreeNode(inorder[rootInIdx], helper(postLb, postUb-1), None)
      elif inIdx[postorder[l]] > rootInIdx:
        return TreeNode(inorder[rootInIdx], None, helper(postLb, postUb-1))
      mid = None
      while l <= r:
        mid = (l+r) // 2
        if inIdx[postorder[mid]] < rootInIdx and inIdx[postorder[mid+1]] > rootInIdx:
          break
        elif inIdx[postorder[mid]] < rootInIdx:
          l = mid+1
        else:
          r = mid-1
      return TreeNode(inorder[rootInIdx], helper(postLb, mid+1), helper(mid+1, postUb-1))
      
    return helper(0, len(postorder))
