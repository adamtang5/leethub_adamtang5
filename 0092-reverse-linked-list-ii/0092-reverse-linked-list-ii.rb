# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} head
# @param {Integer} left
# @param {Integer} right
# @return {ListNode}
def reverse_between(head, left, right)
    return head if left == right
    i, rev, curr, prev, remain = 1, nil, head, nil, nil
    if left == 1
        prev = ListNode.new
        prev.next = head
    end
    while i <= left-1
        if i == left-1
            prev = curr
        end
        curr = curr.next
        i += 1
    end
    while i <= right
        remain = curr.next
        curr.next = rev
        rev = curr
        curr = remain
        i += 1
    end
    prev.next.next = remain
    prev.next = rev
    if left == 1
        head = prev.next
    end
    return head
end