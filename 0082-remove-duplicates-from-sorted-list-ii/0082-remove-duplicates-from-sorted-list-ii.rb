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
def delete_duplicates(head)
  return head if !head
  init_val = head.val
  prev = ListNode.new
  prev.next = curr = head
  while curr
    if curr.next && curr.next.val != curr.val
      prev = prev.next
      curr = curr.next
    elsif curr.next && curr.next.val == curr.val
      while curr.next && curr.next.val == curr.val
        curr = curr.next
      end
      prev.next = curr.next
      if curr.val == init_val
        head = prev.next
        if head
          init_val = head.val
        end
      end
      if !curr.next
        return head
      else
        curr = prev.next
      end
    else
      return head
    end
  end
end