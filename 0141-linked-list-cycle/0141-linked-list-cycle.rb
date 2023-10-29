# Definition for singly-linked list.
# class ListNode
#   attr_accessor :val, :next
#   def initialize(val)
#     @val = val
#     @next = nil
#   end
# end

# @param {ListNode} head
# @return {Boolean}
def hasCycle(head)
  visited, curr = Set.new, head
  while curr
    return true if visited.include?(curr)
    visited << curr
    curr = curr.next
  end
  false
end