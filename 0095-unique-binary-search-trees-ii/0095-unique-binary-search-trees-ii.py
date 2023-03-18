from collections import defaultdict
# Definition for a binary tree node.
# class TreeNode:
#   def __init__(self, val=0, left=None, right=None):
#     self.val = val
#     self.left = left
#     self.right = right
class Solution:
  def generateTrees(self, n: int) -> List[Optional[TreeNode]]:
    dp = {}
    
    def helper(lb, ub):
      if lb == ub:
        dp[(lb, ub)] = dp.get((lb, ub), [TreeNode(lb)])
      else:
        trees = []
        for rootVal in range(lb, ub+1):
          helper(lb, rootVal-1)
          helper(rootVal+1, ub)
          if rootVal == ub:
            for leftTree in dp[(lb, rootVal-1)]:
              newTree = TreeNode(rootVal)
              newTree.left = leftTree
              trees.append(newTree)
          elif rootVal == lb:
            for rightTree in dp[(rootVal+1, ub)]:
              newTree = TreeNode(rootVal)
              newTree.right = rightTree
              trees.append(newTree)
          else:
            for leftTree in dp[(lb, rootVal-1)]:
              for rightTree in dp[(rootVal+1, ub)]:
                newTree = TreeNode(rootVal)
                newTree.left = leftTree
                newTree.right = rightTree
                trees.append(newTree)
        if lb <= ub:
          dp[(lb, ub)] = dp.get((lb, ub), trees)
    
    helper(1, n)
    return dp[(1, n)]