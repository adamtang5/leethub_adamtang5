# Definition for singly-linked list.
# class ListNode:
#   def __init__(self, val=0, next=None):
#     self.val = val
#     self.next = next
class Solution:
  def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
    def merge2Lists(list1: Optional[ListNode], list2: Optional[ListNode]):
      dh = ListNode()
      curr1, curr2, currDH = list1, list2, dh
      while curr1 and curr2:
        if curr1.val <= curr2.val:
          currDH.next = curr1
          curr1 = curr1.next
        else:
          currDH.next = curr2
          curr2 = curr2.next
        currDH = currDH.next
      currDH.next = curr1 if curr1 else curr2
      return dh.next
    
    if len(lists) == 0: return None
    first = second = None
    while len(lists) > 1:
      first = lists.pop(0)
      second = lists.pop(0)
      lists.append(merge2Lists(first, second))
    return lists[0]