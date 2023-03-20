# Definition for singly-linked list.
# class ListNode
#   attr_accessor :val, :next
#   def initialize(val = 0, _next = nil)
#     @val = val
#     @next = _next
#   end
# end
# @param {ListNode} l1
# @param {ListNode} l2
# @return {ListNode}
def add_two_numbers(l1, l2)
  prev = ListNode.new
  curr1, curr2, curr, carry = l1, l2, prev, 0
  while curr1 || curr2
    val1 = curr1 ? curr1.val : 0
    val2 = curr2 ? curr2.val : 0
    curr.next = ListNode.new(val1+val2+carry)
    if curr1
      curr1 = curr1.next
    end
    if curr2
      curr2 = curr2.next
    end
    curr = curr.next
    carry = curr.val / 10
    curr.val %= 10
  end
  if carry > 0
    curr.next = ListNode.new(carry)
  end
  return prev.next
end