# Definition for singly-linked list.
# class ListNode
#   attr_accessor :val, :next
#   def initialize(val = 0, _next = nil)
#     @val = val
#     @next = _next
#   end
# end
# @param {ListNode} head
# @param {Integer} n
# @return {ListNode}
def remove_nth_from_end(head, n)
  ahead = behind = head
  while n >= 0
    if ahead
      ahead = ahead.next
      n -= 1
    else
      return head.next
    end
  end
  while ahead
    ahead = ahead.next
    behind = behind.next
  end
  behind.next = behind.next.next
  head
end