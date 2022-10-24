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
def reverse_list(head)
    return head if !head
    rev, curr = nil, head
    while head
        head = curr.next
        curr.next = rev
        rev = curr
        curr = head
    end
    return rev
end