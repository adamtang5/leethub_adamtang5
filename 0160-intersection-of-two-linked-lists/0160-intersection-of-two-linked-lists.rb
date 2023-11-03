require 'set'

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
  nodes, curr = Set.new, headA
  while curr
    nodes << curr
    curr = curr.next
  end
  curr = headB
  while curr
    return curr if nodes.include?(curr)
    curr = curr.next
  end
  nil
end