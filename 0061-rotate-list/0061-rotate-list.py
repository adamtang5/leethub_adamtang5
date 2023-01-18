# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        if head is None:
            return head
        curr, length, i = head, 0, 0
        while curr:
            length += 1
            curr = curr.next
        headIdx = (length - (k%length)) % length
        if headIdx == 0:
            return head
        curr = head
        while i < headIdx-1:
            curr = curr.next
            i += 1
        last, newHead = curr, curr.next
        last.next = None
        curr = newHead
        while curr.next:
            curr = curr.next
        curr.next = head
        return newHead
        