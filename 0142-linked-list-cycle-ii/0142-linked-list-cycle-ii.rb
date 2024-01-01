# Definition for singly-linked list.
# class ListNode
#   attr_accessor :val, :next
#   def initialize(val)
#     @val = val
#     @next = nil
#   end
# end

# @param {ListNode} head
# @return {ListNode}
def detectCycle(head)
  node_set, curr = Set.new, head
  while curr
    return curr if node_set.include?(curr)
    node_set << curr
    curr = curr.next
  end
  nil
end