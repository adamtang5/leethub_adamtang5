"""
# Definition for a Node.
class Node:
  def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
    self.val = int(x)
    self.next = next
    self.random = random
"""

class Solution:
  def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
    if not head: return head
    
    orig = []
    curr = head
    while curr:
      orig.append(curr)
      curr = curr.next
      
    randoms = [0]*len(orig)
    for i in range(len(orig)):
      randoms[i] = orig.index(orig[i].random) if orig[i].random in orig else -1
      
    ans = Node(head.val)
    ansArr = []
    curr = ans
    for i in range(1, len(orig)):
      ansArr.append(curr)
      curr.next = Node(orig[i].val)
      curr = curr.next
    ansArr.append(curr)
    
    for i, r in enumerate(randoms):
      if r >= 0:
        ansArr[i].random = ansArr[r]
        
    return ans