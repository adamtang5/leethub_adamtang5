# Definition for singly-linked list.
# class ListNode:
#   def __init__(self, val=0, next=None):
#     self.val = val
#     self.next = next
# Definition for a binary tree node.
# class TreeNode:
#   def __init__(self, val=0, left=None, right=None):
#     self.val = val
#     self.left = left
#     self.right = right
class Solution:
  def sortedListToBST(self, head: Optional[ListNode]) -> Optional[TreeNode]:
    lst, curr = [], head
    while curr:
      lst.append(curr)
      curr = curr.next
    
    def helper(lb, ub):
      if lb == ub:
        return None
      mid = (lb+ub)//2
      return TreeNode(lst[mid].val, helper(lb, mid), helper(mid+1, ub))
    
    return helper(0, len(lst))
  