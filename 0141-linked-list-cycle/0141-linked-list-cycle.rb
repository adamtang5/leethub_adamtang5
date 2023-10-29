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
  curr = head
  10001.times do
    return false if !curr
    curr = curr.next
  end
  true
end