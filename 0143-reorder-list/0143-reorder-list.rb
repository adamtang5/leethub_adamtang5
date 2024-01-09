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
  slow, fast = head, head.next
  while fast && fast.next
    slow = slow.next
    fast = fast.next.next
  end
  second = slow.next
  slow.next = nil
  prev_node = next_node = nil
  while second
    next_node = second.next
    second.next = prev_node
    prev_node = second
    second = next_node
  end
  first, second = head, prev_node
  next1 = next2 = nil
  while second
    next1, next2 = first.next, second.next
    first.next = second
    second.next = next1
    first, second = next1, next2
  end
  nil
end