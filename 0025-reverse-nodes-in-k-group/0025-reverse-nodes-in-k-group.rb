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
def reverse_k_group(head, k)
    curr, prev, rev, len, i, remain, new_prev, j = head, head, nil, 0, 0, nil, nil, 0
    while curr
        curr = curr.next
        len += 1
    end
    curr = head
    
    while len-i >= k
        j = 0
        rev = nil
        while j < k
            remain = curr.next
            curr.next = rev
            rev = curr
            curr = remain
            j += 1
        end
        if i == 0
            prev.next = remain
            head = rev
        else
            prev.next.next = remain
            new_prev = prev.next
            prev.next = rev
            prev = new_prev
        end
        i += k
    end
    return head
end