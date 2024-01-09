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
    slow, fast = head, head.next
    while fast and fast.next:
      slow = slow.next
      fast = fast.next.next
    second = slow.next
    slow.next = None
    prevNode = nextNode = None
    while second:
      nextNode = second.next
      second.next = prevNode
      prevNode = second
      second = nextNode
    first, second = head, prevNode
    next1 = next2 = None
    while second:
      next1, next2 = first.next, second.next
      first.next = second
      second.next = next1
      first, second = next1, next2