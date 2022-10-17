# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dh = ListNode()
        dh.next = head
        prevNode = dh
        nextNode = prevNode.next
        if head is None:
            return head
        currNode = nextNode.next
        
        while nextNode.next:
            prevNode.next = currNode
            nextNode.next = currNode.next
            currNode.next = nextNode
            if nextNode.next is None:
                return dh.next
            prevNode = nextNode
            nextNode = nextNode.next
            currNode = nextNode.next
        return dh.next