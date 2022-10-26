# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseBetween(self, head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:
        if left == right:
            return head
        i, rev, curr = 1, None, head
        prev, remain = None, None
        if left == 1:
            prev = ListNode()
            prev.next = head
        while i <= left-1:
            if i == left-1:
                prev = curr
            curr = curr.next
            i += 1
        while i <= right:
            remain = curr.next
            curr.next = rev
            rev = curr
            curr = remain
            i += 1
        prev.next.next = remain
        prev.next = rev
        if left == 1:
            head = prev.next
        return head