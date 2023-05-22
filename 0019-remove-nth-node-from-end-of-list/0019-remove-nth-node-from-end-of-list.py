# Definition for singly-linked list.
# class ListNode:
#   def __init__(self, val=0, next=None):
#     self.val = val
#     self.next = next
class Solution:
  def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
    ahead, behind = head, head
    
    while n >= 0:
      if ahead:
        ahead = ahead.next
        n -= 1
      else:
        return head.next
    
    while ahead:
      ahead = ahead.next
      behind = behind.next
      
    behind.next = behind.next.next
    return head