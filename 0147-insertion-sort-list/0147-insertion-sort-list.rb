# Definition for singly-linked list.
# class ListNode
#   attr_accessor :val, :next
#   def initialize(val = 0, _next = nil)
#     @val = val
#     @next = _next
#   end
# end
# @param {ListNode} head
# @return {ListNode}
def insertion_sort_list(head)
  dh = ListNode.new
  orig, curr_prev, curr_next = head, dh, dh.next
  while orig
    while curr_next && curr_next.val <= orig.val
      curr_next = curr_next.next
      curr_prev = curr_prev.next
    end
    curr_prev.next = orig
    orig = orig.next
    curr_prev.next.next = curr_next
    curr_prev, curr_next = dh, dh.next
  end
  dh.next
end