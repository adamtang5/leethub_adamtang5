# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        dummyHead = ListNode()
        curr1, curr2, currDH = l1, l2, dummyHead
        while curr1 and curr2:
            currDH.next = ListNode(curr1.val + curr2.val)
            currDH = currDH.next
            curr1 = curr1.next
            curr2 = curr2.next
        if curr1:
            currDH.next = curr1
        elif curr2:
            currDH.next = curr2
        # print(dummyHead.next)
        
        carry = 0
        curr = dummyHead
        while curr:
            curr.val += carry
            if curr.val >= 10:
                carry = 1
                curr.val -= 10
            else:
                carry = 0
            # print(dummyHead.next)
            if not curr.next and carry:
                curr.next = ListNode(carry)
                carry = 0
            curr = curr.next
        return dummyHead.next
        