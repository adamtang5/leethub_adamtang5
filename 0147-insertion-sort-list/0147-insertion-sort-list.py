# Definition for singly-linked list.
# class ListNode:
#   def __init__(self, val=0, next=None):
#     self.val = val
#     self.next = next
class Solution:
  def insertionSortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
    dh = ListNode()
    orig, currPrev, currNext = head, dh, dh.next
    while orig:
      while currNext and currNext.val <= orig.val:
        currNext = currNext.next
        currPrev = currPrev.next
      currPrev.next = orig
      orig = orig.next
      currPrev.next.next = currNext
      currPrev, currNext = dh, dh.next
    return dh.next