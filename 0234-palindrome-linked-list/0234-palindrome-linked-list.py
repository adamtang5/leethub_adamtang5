# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        if head is None:
            return True
        rev, double, remain = None, head, head.next
        while double and double.next:
            double = double.next.next
            remain = head.next
            head.next = rev
            rev = head
            head = remain
        if double:
            head = head.next
        while rev and head:
            if rev.val != head.val:
                return False
            else:
                rev = rev.next
                head = head.next
        return True