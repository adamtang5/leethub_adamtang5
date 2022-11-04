# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        curr, prev, rev, length, i, remain, newPrev, j = head, head, None, 0, 0, None, None, 0
        while curr:
            curr = curr.next
            length += 1
        curr = head
        
        while length-i >= k:
            j = 0
            rev = None
            while j < k:
                remain = curr.next
                curr.next = rev
                rev = curr
                curr = remain
                j += 1
            if i == 0:
                prev.next = remain
                head = rev
            else:
                prev.next.next = remain
                newPrev = prev.next
                prev.next = rev
                prev = newPrev
            i += k
        return head