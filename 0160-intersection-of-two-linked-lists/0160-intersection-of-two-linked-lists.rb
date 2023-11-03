# Definition for singly-linked list.
# class ListNode
#   attr_accessor :val, :next
#   def initialize(val)
#     @val = val
#     @next = nil
#   end
# end

# @param {ListNode} headA
# @param {ListNode} headB
# @return {ListNode}
def getIntersectionNode(headA, headB)
  node1, node2 = headA, headB
  while node1 != node2
    node1 = node1 ? node1.next : headB
    node2 = node2 ? node2.next : headA
  end
  node1
end