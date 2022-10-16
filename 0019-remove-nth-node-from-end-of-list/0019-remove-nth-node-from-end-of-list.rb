# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} head
# @param {Integer} n
# @return {ListNode}
def remove_nth_from_end(head, n)
    len, curr = 0, head
    while curr
        len += 1
        curr = curr.next
    end
    i, dh = -1, ListNode.new
    dh.next = head
    curr = dh
    while i < len - n - 1
        curr = curr.next
        i += 1
    end
    prev = curr
    curr = curr.next
    prev.next = curr.next
    return dh.next
end