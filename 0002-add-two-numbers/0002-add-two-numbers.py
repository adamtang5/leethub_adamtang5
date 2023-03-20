# Definition for singly-linked list.
# class ListNode:
#   def __init__(self, val=0, next=None):
#     self.val = val
#     self.next = next
class Solution:
  def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
    prev = ListNode()
    curr1, curr2, curr, carry = l1, l2, prev, 0
    while curr1 or curr2:
      val1 = curr1.val if curr1 else 0
      val2 = curr2.val if curr2 else 0
      curr.next = ListNode(val1+val2+carry)
      if curr1:
        curr1 = curr1.next
      if curr2:
        curr2 = curr2.next
      curr = curr.next
      carry = curr.val // 10
      curr.val %= 10
    if carry > 0:
      curr.next = ListNode(carry)
    return prev.next