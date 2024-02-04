# Definition for singly-linked list.
# class ListNode:
#   def __init__(self, val=0, next=None):
#     self.val = val
#     self.next = next
class Solution:
  def removeElements(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:
    dh = ListNode()
    dh.next = head
    prev, curr = dh, head
    while curr:
      if curr.val == val:
        prev.next = curr.next
        curr = prev.next
      elif curr:
        curr = curr.next
        prev = prev.next
    return dh.next