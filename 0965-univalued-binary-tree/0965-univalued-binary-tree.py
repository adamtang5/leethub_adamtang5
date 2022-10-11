# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isUnivalTree(self, root: Optional[TreeNode], rootVal=None) -> bool:
        rootVal = rootVal if rootVal is not None else root.val
        # base case
        if root.val != rootVal:
            return False
        if root.left is None and root.right is None:
            return True
        
        # recursive step
        return (root.left is None or self.isUnivalTree(root.left, rootVal)) and (root.right is None or self.isUnivalTree(root.right, rootVal))