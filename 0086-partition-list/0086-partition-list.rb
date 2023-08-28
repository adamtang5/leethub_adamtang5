# Definition for singly-linked list.
# class ListNode
#   attr_accessor :val, :next
#   def initialize(val = 0, _next = nil)
#     @val = val
#     @next = _next
#   end
# end
# @param {ListNode} head
# @param {Integer} x
# @return {ListNode}
def partition(head, x)
  return head if !head
  left, right = ListNode.new, ListNode.new
  curr, left_tail, right_tail = head, left, right
  next_node = nil
  while curr
    if curr.val < x
      left_tail.next = curr
      left_tail = left_tail.next
    else
      right_tail.next = curr
      right_tail = right_tail.next
    end
    next_node = curr.next
    curr.next = nil
    curr = next_node
  end
  left_tail.next = right.next
  left.next
end
