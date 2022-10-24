# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head is None:
            return head
        rev, curr = None, head
        while head:
            head = curr.next
            curr.next = rev
            rev = curr
            curr = head
        return rev