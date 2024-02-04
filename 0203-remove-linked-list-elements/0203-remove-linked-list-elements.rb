# Definition for singly-linked list.
# class ListNode
#   attr_accessor :val, :next
#   def initialize(val = 0, _next = nil)
#     @val = val
#     @next = _next
#   end
# end
# @param {ListNode} head
# @param {Integer} val
# @return {ListNode}
def remove_elements(head, val)
  dh = ListNode.new
  dh.next = head
  prev, curr = dh, head
  while curr
    if curr.val == val
      prev.next = curr.next
      curr = prev.next
    elsif curr
      curr = curr.next
      prev = prev.next
    end
  end
  dh.next
end