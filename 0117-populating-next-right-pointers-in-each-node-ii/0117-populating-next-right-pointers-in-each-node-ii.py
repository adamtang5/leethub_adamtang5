"""
# Definition for a Node.
class Node:
  def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
    self.val = val
    self.left = left
    self.right = right
    self.next = next
"""

class Solution:
  def connect(self, root: 'Optional[Node]') -> 'Optional[Node]':
    def isLeaf(node: 'Node') -> bool:
      return not node.left and not node.right
    
    def nextChild(node: 'Optional[Node]') -> 'Optional[Node]':
      return None if not node else node.left if node.left else node.right
    
    def lastChild(node: 'Optional[Node]') -> 'Optional[Node]':
      return None if not node else node.right if node.right else node.left
    
    thisCur, thisNxt, nxtLvl = root, None, nextChild(root)
    
    while thisCur and nxtLvl:
      if thisCur.left and thisCur.right:
        thisCur.left.next = thisCur.right
      if lastChild(thisCur) and thisNxt:
        while thisNxt and isLeaf(thisNxt):
          thisNxt = thisNxt.next
        lastChild(thisCur).next = nextChild(thisNxt)
      thisCur = thisNxt
      if thisNxt:
        thisNxt = thisNxt.next
      if not thisCur:
        thisCur = nxtLvl
        thisNxt = thisCur
        while thisNxt and isLeaf(thisNxt):
          thisNxt = thisNxt.next
        nxtLvl = None if not thisNxt or isLeaf(thisNxt) else nextChild(thisNxt)
        thisNxt = thisCur.next
    return root