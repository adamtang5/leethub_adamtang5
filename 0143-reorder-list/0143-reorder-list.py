# Definition for singly-linked list.
# class ListNode:
#   def __init__(self, val=0, next=None):
#     self.val = val
#     self.next = next
class Solution:
  def reorderList(self, head: Optional[ListNode]) -> None:
    """
    Do not return anything, modify head in-place instead.
    """
    stack, curr = [], head
    while curr:
      stack.append(curr)
      curr = curr.next
    curr = head
    stack.pop(0)
    while stack:
      curr.next = stack.pop()
      curr = curr.next
      if stack:
        curr.next = stack.pop(0)
        curr = curr.next
    curr.next = None