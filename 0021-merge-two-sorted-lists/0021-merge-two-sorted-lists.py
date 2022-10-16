# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        dummyHead = ListNode()
        c1, c2, cdh = list1, list2, dummyHead
        while c1 and c2:
            if c1.val <= c2.val:
                cdh.next = c1
                c1 = c1.next
            else:
                cdh.next = c2
                c2 = c2.next
            cdh = cdh.next
        
        if c1:
            cdh.next = c1
        else:
            cdh.next = c2
            
        return dummyHead.next