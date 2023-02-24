# Definition for singly-linked list.
# class ListNode:
#   def __init__(self, val=0, next=None):
#     self.val = val
#     self.next = next
class Solution:
  def partition(self, head: Optional[ListNode], x: int) -> Optional[ListNode]:
    if head is None:
      return head
    left, right = ListNode(), ListNode()
    curr, leftTail, rightTail = head, left, right
    nextNode = None
    while curr:
      if curr.val < x:
        leftTail.next = curr
        leftTail = leftTail.next
      else:
        rightTail.next = curr
        rightTail = rightTail.next
      nextNode = curr.next
      curr.next = None
      curr = nextNode
    leftTail.next = right.next
    return left.next