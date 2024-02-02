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
def merge(head1, head2)
  prev, curr1, curr2 = ListNode.new, head1, head2
  curr = prev
  while curr1 && curr2
    if curr1.val <= curr2.val
      curr.next = curr1
      curr1 = curr1.next
    else
      curr.next = curr2
      curr2 = curr2.next
    end
    curr = curr.next
  end
  if curr1
    curr.next = curr1
  else
    curr.next = curr2
  end
  prev.next
end

def sort_list(head)
  return head if !head || !head.next
  slow = fast = head
  while fast && fast.next && fast.next.next
    slow = slow.next
    fast = fast.next.next
  end
  prev1, prev2 = head, slow.next
  slow.next = nil
  prev1 = sort_list(prev1)
  prev2 = sort_list(prev2)
  merge(prev1, prev2)
end