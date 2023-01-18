# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} head
# @param {Integer} k
# @return {ListNode}
def rotate_right(head, k)
    return head if !head
    curr, len, i = head, 0, 0
    while curr
        len += 1
        curr = curr.next
    end
    head_idx = (len - (k % len)) % len
    return head if head_idx == 0
    curr = head
    while i < head_idx-1
        curr = curr.next
        i += 1
    end
    last, new_head = curr, curr.next
    last.next = nil
    curr = new_head
    while curr.next
        curr = curr.next
    end
    curr.next = head
    return new_head
end