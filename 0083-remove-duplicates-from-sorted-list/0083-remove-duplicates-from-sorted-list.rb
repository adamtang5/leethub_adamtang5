# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} head
# @return {ListNode}
def delete_duplicates(head)
    return head if head == nil
    curr, curr_val = head, head.val
    while curr
        while curr.next && curr.next.val == curr_val
            curr.next = curr.next.next
        end
        curr = curr.next
        if curr
            curr_val = curr.val
        end
    end
    return head
end