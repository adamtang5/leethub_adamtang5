# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} head
# @return {Boolean}
def is_palindrome(head)
    return true if !head
    rev, double, remain = nil, head, head.next
    while double && double.next
        double = double.next.next
        remain = head.next
        head.next = rev
        rev = head
        head = remain
    end
    if double
        head = head.next
    end
    while rev && head
        if rev.val != head.val
            return false
        else
            rev = rev.next
            head = head.next
        end
    end
    return true
end