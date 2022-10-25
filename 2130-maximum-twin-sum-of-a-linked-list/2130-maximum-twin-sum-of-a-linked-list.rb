# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} head
# @return {Integer}
def pair_sum(head)
    rev, double, remain = nil, head, head.next
    curr_max = -1 / 0.0
    while double && double.next
        double = double.next.next
        head.next = rev
        rev = head
        head = remain
        remain = remain.next
    end
    while rev
        curr_max = [curr_max, rev.val+head.val].max
        rev = rev.next
        head = head.next
    end
    return curr_max
end