# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        length, curr = 0, head
        while curr:
            length += 1
            curr = curr.next
        
        i, dummyHead = -1, ListNode()
        dummyHead.next = head
        curr = dummyHead
        
        while i < length - n - 1:
            curr = curr.next
            i += 1
        prev = curr
        curr = curr.next
        prev.next = curr.next
        return dummyHead.next