# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head is None:
            return head
        curr, currVal = head, head.val
        while curr:
            while curr.next and curr.next.val == currVal:
                curr.next = curr.next.next
            curr = curr.next
            if curr:
                currVal = curr.val
        return head