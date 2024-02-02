# Definition for singly-linked list.
# class ListNode:
#   def __init__(self, val=0, next=None):
#     self.val = val
#     self.next = next
class Solution:
  def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
    if not head or not head.next: return head
    slow = fast = head
    while fast and fast.next and fast.next.next:
      slow = slow.next
      fast = fast.next.next
    prev1, prev2 = head, slow.next
    slow.next = None
    prev1 = self.sortList(prev1)
    prev2 = self.sortList(prev2)
    
    def merge(head1: Optional[ListNode], head2: Optional[ListNode]) -> Optional[ListNode]:
      prev, curr1, curr2 = ListNode(), head1, head2
      curr = prev
      while curr1 and curr2:
        if curr1.val <= curr2.val:
          curr.next = curr1
          curr1 = curr1.next
        else:
          curr.next = curr2
          curr2 = curr2.next
        curr = curr.next
      if curr1:
        curr.next = curr1
      else:
        curr.next = curr2
      return prev.next
    
    return merge(prev1, prev2)