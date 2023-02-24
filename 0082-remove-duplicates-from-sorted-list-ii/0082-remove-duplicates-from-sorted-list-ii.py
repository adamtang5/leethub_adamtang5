# Definition for singly-linked list.
# class ListNode:
#   def __init__(self, val=0, next=None):
#     self.val = val
#     self.next = next
class Solution:
  def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
    if head is None:
      return head
    initVal = head.val
    prev = ListNode()
    prev.next = curr = head
    while curr:
      if curr.next and curr.next.val != curr.val:
        prev = prev.next
        curr = curr.next
      elif curr.next and curr.next.val == curr.val:
        while curr.next and curr.next.val == curr.val:
          curr = curr.next
        prev.next = curr.next
        if curr.val == initVal:
          head = prev.next
          if head:
            initVal = head.val
        if curr.next is None:
          return head
        else:
          curr = prev.next
      else:
        return head
        