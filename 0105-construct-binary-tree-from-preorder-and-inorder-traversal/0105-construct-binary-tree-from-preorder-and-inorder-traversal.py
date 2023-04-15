# Definition for a binary tree node.
# class TreeNode:
#   def __init__(self, val=0, left=None, right=None):
#     self.val = val
#     self.left = left
#     self.right = right
class Solution:
  def buildTree(self, preorder: List[int], inorder: List[int]) -> Optional[TreeNode]:
    inIdx = {}
    for i, e in enumerate(inorder):
      inIdx[e] = i
    
    def helper(preVals):
      if preVals == []:
        return None
      if len(preVals) == 1:
        return TreeNode(preVals[0])
      rootVal = preVals[0]
      leftVals, rightVals = [], []
      for i in range(1, len(preVals)):
        if inIdx[preVals[i]] < inIdx[rootVal]:
          leftVals.append(preVals[i])
        else:
          rightVals.append(preVals[i])
      return TreeNode(
        val=rootVal,
        left=helper(leftVals),
        right=helper(rightVals)
      )
    
    return helper(preorder)