# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def pairSum(self, head: Optional[ListNode]) -> int:
        rev, double, remain = None, head, head.next
        currMax = float('-inf');
        while double and double.next:
            double = double.next.next
            head.next = rev
            rev = head
            head = remain
            remain = remain.next
        while rev:
            currMax = max(currMax, rev.val+head.val)
            rev = rev.next
            head = head.next
        return currMax