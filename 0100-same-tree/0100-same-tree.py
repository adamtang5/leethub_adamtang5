# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        if not (bool(p) or bool(q)):
            return True
        if bool(p) ^ bool(q):
            return False
        if not (bool(p.left) or bool(p.right) or bool(q.left) or bool(q.right)):
            return p.val == q.val
        
        if p.val != q.val:
            return False
        else:
            return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)