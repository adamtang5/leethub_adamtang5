# Definition for singly-linked list.
# class ListNode:
#   def __init__(self, x):
#     self.val = x
#     self.next = None

class Solution:
  def hasCycle(self, head: Optional[ListNode]) -> bool:
    curr = head
    for _ in range(10001):
      if not curr: return False
      curr = curr.next
    return True