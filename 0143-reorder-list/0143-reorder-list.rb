# Definition for singly-linked list.
# class ListNode
#   attr_accessor :val, :next
#   def initialize(val = 0, _next = nil)
#     @val = val
#     @next = _next
#   end
# end
# @param {ListNode} head
# @return {Void} Do not return anything, modify head in-place instead.
def reorder_list(head)
  stack, curr = [], head
  while curr
    stack << curr
    curr = curr.next
  end
  curr = head
  stack.shift
  while !stack.empty?
    curr.next = stack.pop
    curr = curr.next
    if !stack.empty?
      curr.next = stack.shift
      curr = curr.next
    end
  end
  curr.next = nil
  nil
end